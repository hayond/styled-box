import { compose } from "@styled-system/core";
import { margin, padding } from "@styled-system/space";
import { color } from "@styled-system/color";
import { layout } from "@styled-system/layout";
import { typography } from "@styled-system/typography";
import { flexbox } from "@styled-system/flexbox";
import { border } from "@styled-system/border";
import { background } from "@styled-system/background";
import { position } from "@styled-system/position";
import { shadow } from "@styled-system/shadow";
import isPropValid from "@emotion/is-prop-valid";
import RNWStyleSheet from "./lib/StyleSheet/StyleSheet.js";
import { createCss, createStyled } from "./lib/primitives-core/index.js";

const VIEW_STYLE_PROPS = [
  margin,
  padding,
  color,
  layout,
  flexbox,
  border,
  position,
];

export const styledSystem = {
  compose,
  margin,
  padding,
  color,
  layout,
  flexbox,
  border,
  position,
  typography,
  shadow,
  background,
};
export const StyleSheet = RNWStyleSheet;

export const css = createCss(StyleSheet);
export const styled = createStyled(StyleSheet);

export function createStyledView(
  View,
  StyleSheet = RNWStyleSheet,
  shouldForwardProp = isPropValid,
  noFlatten = false
) {
  return createStyled(StyleSheet)(View, { shouldForwardProp, noFlatten })(
    compose(...VIEW_STYLE_PROPS)
  );
}

export function createStyledViewText(
  Text,
  StyleSheet = RNWStyleSheet,
  shouldForwardProp = isPropValid,
  noFlatten = false
) {
  return createStyled(StyleSheet)(Text, { shouldForwardProp, noFlatten })(
    compose(...VIEW_STYLE_PROPS, typography, shadow)
  );
}

export function createStyledViewImage(
  Image,
  StyleSheet = RNWStyleSheet,
  shouldForwardProp = isPropValid,
  noFlatten = false
) {
  return createStyled(StyleSheet)(Image, { shouldForwardProp, noFlatten })(
    compose(...VIEW_STYLE_PROPS, background)
  );
}

export function createStyledBox(
  Box,
  StyleSheet = RNWStyleSheet,
  shouldForwardProp = isPropValid,
  noFlatten = false
) {
  return createStyled(StyleSheet)(Box, { shouldForwardProp, noFlatten })(
    compose(...VIEW_STYLE_PROPS, typography, shadow, background)
  );
}
