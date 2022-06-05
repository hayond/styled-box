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
import { createCss, createStyled } from "./lib/primitives-core/index.js";
import StyleSheet from "@styled-box/react-primitives/lib/export/StyleSheet/StyleSheet.js";

const VIEW_STYLE_PROPS = [
  margin,
  padding,
  color,
  layout,
  flexbox,
  border,
  position,
];

export const css = createCss(StyleSheet);
export const styled = createStyled(StyleSheet);

export function createStyledView(View, shouldForwardProp) {
  return styled(View, { shouldForwardProp })(compose(...VIEW_STYLE_PROPS));
}

export function createStyledTextView(Text, shouldForwardProp) {
  return styled(Text, { shouldForwardProp })(
    compose([...VIEW_STYLE_PROPS, typography, shadow])
  );
}

export function createStyledImage(Image, shouldForwardProp) {
  return styled(Image, { shouldForwardProp })(
    compose([...VIEW_STYLE_PROPS, background])
  );
}
