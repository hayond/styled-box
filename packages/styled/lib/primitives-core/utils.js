export function interleave(vals) {
  let strings = vals[0];
  let finalArray = [strings[0]];
  for (let i = 1, len = vals.length; i < len; i++) {
    finalArray.push(vals[i]);
    if (strings[i] !== undefined) {
      finalArray.push(strings[i]);
    }
  }
  return finalArray;
}

export function getDisplayName(primitive) {
  return typeof primitive === "string"
    ? primitive
    : primitive.displayName || primitive.name || "Component";
}
