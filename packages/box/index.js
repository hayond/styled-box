import React from "react";

import {
  View as ReactView,
  Text as ReactText,
  Image as ReactImage,
} from "@styled-box/react-primitives";
import {
  createStyledView,
  createStyledTextView,
  createStyledImage,
} from "@styled-box/styled";
import { primitiveShouldForwardProp } from "./lib/shouldForwardProp";

export const View = createStyledView(ReactView, primitiveShouldForwardProp);
export const Text = createStyledTextView(ReactText, primitiveShouldForwardProp);
export const Image = createStyledImage(ReactImage, primitiveShouldForwardProp);

export default function Box(props) {
  return props.source
    ? React.createElement(Image, props)
    : typeof props.children === "string"
    ? React.createElement(Text, props)
    : React.createElement(View, props);
}
