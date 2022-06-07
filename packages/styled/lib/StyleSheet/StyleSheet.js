/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

import ReactNativePropRegistry from "./ReactNativePropRegistry.js";
import flattenStyle from "./flattenStyle.js";

const absoluteFillObject = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};
const absoluteFill = ReactNativePropRegistry.register(absoluteFillObject);

const StyleSheet = {
  absoluteFill,
  absoluteFillObject,
  compose(style1, style2) {
    if (style1 && style2) {
      return [style1, style2];
    } else {
      return style1 || style2;
    }
  },
  create(styles) {
    const result = {};
    Object.keys(styles).forEach((key) => {
      const id = styles[key] && ReactNativePropRegistry.register(styles[key]);
      result[key] = id;
    });
    return result;
  },
  flatten: flattenStyle,

  // `hairlineWidth` is not implemented using screen density as browsers may
  // round sub-pixel values down to `0`, causing the line not to be rendered.
  hairlineWidth: 1,
};

export default StyleSheet;
