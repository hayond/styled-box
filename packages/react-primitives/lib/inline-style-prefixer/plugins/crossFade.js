import isPrefixedValue from "../../css-in-js-utils/isPrefixedValue";

// http://caniuse.com/#search=cross-fade
const prefixes = ["-webkit-", ""];

export default function crossFade(property, value) {
  if (
    typeof value === "string" &&
    !isPrefixedValue(value) &&
    value.indexOf("cross-fade(") > -1
  ) {
    return prefixes.map((prefix) =>
      value.replace(/cross-fade\(/g, `${prefix}cross-fade(`)
    );
  }
}
