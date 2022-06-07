import React from "react";

import {
  StyleSheet as ReactPrimitivesStyleSheet,
  View as ReactPrimitivesView,
  Text as ReactPrimitivesText,
  Image as ReactPrimitivesImage,
} from "@styled-box/react-primitives";
import {
  createStyledView,
  createStyledViewText,
  createStyledViewImage,
} from "@styled-box/styled";
import { primitiveShouldForwardProp } from "@styled-box/styled/shouldForwardProp.js";

export const StyleSheet = ReactPrimitivesStyleSheet;
export const View = createStyledView(
  ReactPrimitivesView,
  ReactPrimitivesStyleSheet,
  primitiveShouldForwardProp,
  true
);
export const Text = createStyledViewText(
  ReactPrimitivesText,
  ReactPrimitivesStyleSheet,
  primitiveShouldForwardProp,
  true
);
export const Image = createStyledViewImage(
  ReactPrimitivesImage,
  ReactPrimitivesStyleSheet,
  primitiveShouldForwardProp,
  true
);

export default function Box(props) {
  return props.source
    ? React.createElement(Image, props)
    : typeof props.children === "string"
    ? React.createElement(Text, props)
    : React.createElement(View, props);
}
