import isPrefixedValue from "../../css-in-js-utils/isPrefixedValue";

// http://caniuse.com/#feat=css-filter-function
const prefixes = ["-webkit-", ""];

export default function filter(property, value) {
  if (
    typeof value === "string" &&
    !isPrefixedValue(value) &&
    value.indexOf("filter(") > -1
  ) {
    return prefixes.map((prefix) =>
      value.replace(/filter\(/g, `${prefix}filter(`)
    );
  }
}
