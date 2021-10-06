import React from 'react';
import { compose } from '@styled-system/core';
import { margin, padding } from '@styled-system/space';
import { color } from '@styled-system/color';
import { layout } from '@styled-system/layout';
import { typography } from '@styled-system/typography';
import { flexbox } from '@styled-system/flexbox';
import { border } from '@styled-system/border';
import { background } from '@styled-system/background';
import { position } from '@styled-system/position';
import { shadow } from '@styled-system/shadow';
import { css, styled } from './primitives/index';

export { css, styled };

const viewStyleProps = [
  margin,
  padding,
  color,
  layout,
  flexbox,
  border,
  position,
];

export const View = styled.View(compose(...viewStyleProps));
export const Image = styled.Image(compose([...viewStyleProps, background]));
export const Text = styled.Text(
  compose([...viewStyleProps, typography, shadow])
);

export default function Box(props) {
  return props.source
    ? React.createElement(Image, props)
    : typeof props.children === 'string'
    ? React.createElement(Text, props)
    : React.createElement(View, props);
}
