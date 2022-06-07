import React from "react";

import {
  StyleSheet as ReactPrimitivesStyleSheet,
  View as ReactPrimitivesView,
  Text as ReactPrimitivesText,
  Image as ReactPrimitivesImage,
} from "@styled-box/react-primitives";
import {
  createStyledView,
  createStyledTextView,
  createStyledImage,
} from "@styled-box/styled";
import { primitiveShouldForwardProp } from "./lib/shouldForwardProp";

export const StyleSheet = ReactPrimitivesStyleSheet;
export const View = createStyledView(
  ReactPrimitivesView,
  ReactPrimitivesStyleSheet,
  primitiveShouldForwardProp,
  true
);
export const Text = createStyledTextView(
  ReactPrimitivesText,
  ReactPrimitivesStyleSheet,
  primitiveShouldForwardProp,
  true
);
export const Image = createStyledImage(
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
