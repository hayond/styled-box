import { StyleSheet, Text, View, Image } from 'react-primitives';
import { createCss } from './core/createCss';
import { createStyled } from './core/createStyled';
import {
  primitiveShouldForwardProp,
  createShouldForwardProp,
} from './shouldForwardProp';

export { createShouldForwardProp };

export const css = createCss(StyleSheet);
export const styled = createStyled(StyleSheet);

styled.Text = styled(Text, { primitiveShouldForwardProp });
styled.View = styled(View, { primitiveShouldForwardProp });
styled.Image = styled(Image, { primitiveShouldForwardProp });
