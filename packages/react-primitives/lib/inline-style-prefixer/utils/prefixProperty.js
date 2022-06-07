import capitalizeString from "./capitalizeString";

export default function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    const newStyle = {};
    const requiredPrefixes = prefixProperties[property];
    const capitalizedProperty = capitalizeString(property);
    const keys = Object.keys(style);
    for (let i = 0; i < keys.length; i++) {
      const styleProperty = keys[i];
      if (styleProperty === property) {
        for (let j = 0; j < requiredPrefixes.length; j++) {
          newStyle[requiredPrefixes[j] + capitalizedProperty] = style[property];
        }
      }
      newStyle[styleProperty] = style[styleProperty];
    }
    return newStyle;
  }
  return style;
}
