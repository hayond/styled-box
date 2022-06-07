import React from "react";
import { createCss } from "./createCss.js";
import { getDisplayName } from "./utils.js";

export function createStyled(StyleSheet) {
  const css = createCss(StyleSheet);

  return (component, { shouldForwardProp, noFlatten = false }) => {
    return function createStyledComponent(...styles) {
      const Styled = (props) => {
        let newProps = {};
        if (shouldForwardProp && typeof shouldForwardProp === "function") {
          for (let key in props) {
            if (shouldForwardProp(key)) {
              newProps[key] = props[key];
            }
          }
        } else {
          newProps = props;
        }
        newProps.style = [css.apply(props, styles), props.style];
        if (!noFlatten) newProps.style = StyleSheet.flatten(newProps.style);
        return React.createElement(component, newProps);
      };
      Styled.displayName = `styled(${getDisplayName(component)})`;
      return Styled;
    };
  };
}
