import React from 'react';
import { createCss } from './createCss';
import { getDisplayName } from './utils';

export function createStyled(StyleSheet) {
  const css = createCss(StyleSheet);

  return (component, { shouldForwardProp }) => {
    return function createStyledComponent(...styles) {
      const Styled = (props) => {
        let newProps = {};
        if (shouldForwardProp && typeof getShouldForwardProp === 'function') {
          for (let key in props) {
            if (shouldForwardProp(key)) {
              newProps[key] = props[key];
            }
          }
        } else {
          newProps = props;
        }
        newProps.style = [css.apply(props, styles), props.style];
        return React.createElement(component, newProps);
      };
      Styled.displayName = `styled(${getDisplayName(component)})`;
      return Styled;
    };
  };
}
