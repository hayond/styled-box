import transform from "css-to-react-native";
import { interleave } from "./utils.js";

// this is for handleInterpolation
// they're reset on every call to css
// this is done so we don't create a new
// handleInterpolation function on every css call
let styles;
let generated = {};
let buffer = "";
let lastType;

function handleInterpolation(interpolation, i, arr) {
  let type = typeof interpolation;

  if (type === "string") {
    // strip comments
    interpolation = interpolation.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, "");
  }

  if (type === "function") {
    handleInterpolation.call(this, interpolation(this), i, arr);
    return;
  }
  let isIrrelevant = interpolation == null || type === "boolean";
  let isRnStyle =
    (type === "object" && !Array.isArray(interpolation)) || type === "number";
  if (lastType === "string" && (isRnStyle || isIrrelevant)) {
    let converted = convertStyles(buffer);
    if (converted !== undefined) {
      styles.push(converted);
    }
    buffer = "";
  }
  if (isIrrelevant) {
    return;
  }

  if (type === "string") {
    buffer += interpolation;

    if (arr.length - 1 === i) {
      let converted = convertStyles(buffer);
      if (converted !== undefined) {
        styles.push(converted);
      }
      buffer = "";
    }
  }
  if (isRnStyle) {
    styles.push(interpolation);
  }
  if (Array.isArray(interpolation)) {
    interpolation.forEach(handleInterpolation, this);
  }
  lastType = type;
}

// Use platform specific StyleSheet method for creating the styles.
// This enables us to use the css``/css({}) in any environment (Native | Sketch | Web)
export function createCss(StyleSheet) {
  return function css(...args) {
    const prevBuffer = buffer;
    let vals;

    // these are declared earlier
    // this is done so we don't create a new
    // handleInterpolation function on every css call
    styles = [];
    buffer = "";
    lastType = undefined;

    if (args[0] == null || args[0].raw === undefined) {
      vals = args;
    } else {
      vals = interleave(args);
    }

    try {
      vals.forEach(handleInterpolation, this);
    } finally {
      buffer = prevBuffer;
    }

    const hash = JSON.stringify(styles);
    if (!generated[hash]) {
      const styleSheet = StyleSheet.create({
        generated: StyleSheet.flatten(styles),
      });
      generated[hash] = styleSheet.generated;
    }
    return generated[hash];
  };
}

let propertyValuePattern = /\s*([^\s]+)\s*:\s*(.+?)\s*$/;

function convertPropertyValue(style) {
  // Get prop name and prop value
  let match = propertyValuePattern.exec(style);
  // match[2] will be " " in cases where there is no value
  // but there is whitespace, e.g. "color: "
  if (match !== null && match[2] !== " ") {
    // the first value in the array will
    // be the whole string so we remove it
    match.shift();
    // yes i know this looks funny
    this.push(match);
  }
}

function convertStyles(str) {
  if (str.trim() === "") {
    return;
  }

  const stylePairs = [];

  const parsedString = str.split(";");

  parsedString.forEach(convertPropertyValue, stylePairs);

  try {
    return transform(stylePairs);
  } catch (error) {
    const msg = error.message;

    if (msg.includes("Failed to parse declaration")) {
      const values = msg
        .replace("Failed to parse declaration ", "")
        .replace(/"/g, "")
        .trim()
        .split(":");

      const errorMsg = `'${values[0]}' shorthand property requires units for example - ${values[0]}: 20px or ${values[0]}: 10px 20px 40px 50px`;

      console.error(errorMsg);
    }
  }
}
