/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

import { canUseDOM } from "../../fbjs/lib/ExecutionEnvironment";
import invariant from "../../fbjs/lib/invariant";

const dimensions = {
  window: {
    fontScale: 1,
    height: 0,
    scale: 1,
    width: 0,
  },
  screen: {
    fontScale: 1,
    height: 0,
    scale: 1,
    width: 0,
  },
};
const listeners = {};

export default class Dimensions {
  static get(dimension) {
    invariant(dimensions[dimension], `No dimension set for key ${dimension}`);
    return dimensions[dimension];
  }

  static set(initialDimensions) {
    if (initialDimensions) {
      if (canUseDOM) {
        invariant(false, "Dimensions cannot be set in the browser");
      } else {
        if (initialDimensions.screen != null) {
          dimensions.screen = initialDimensions.screen;
        }
        if (initialDimensions.window != null) {
          dimensions.window = initialDimensions.window;
        }
      }
    }
  }

  static _update() {
    if (!canUseDOM) {
      return;
    }

    const win = window;
    const docEl = win.document.documentElement;

    dimensions.window = {
      fontScale: 1,
      height: docEl.clientHeight,
      scale: win.devicePixelRatio || 1,
      width: docEl.clientWidth,
    };

    dimensions.screen = {
      fontScale: 1,
      height: win.screen.height,
      scale: win.devicePixelRatio || 1,
      width: win.screen.width,
    };

    if (Array.isArray(listeners["change"])) {
      listeners["change"].forEach((handler) => handler(dimensions));
    }
  }

  static addEventListener(type, handler) {
    listeners[type] = listeners[type] || [];
    listeners[type].push(handler);

    return {
      remove: () => {
        this.removeEventListener(type, handler);
      },
    };
  }

  static removeEventListener(type, handler) {
    if (Array.isArray(listeners[type])) {
      listeners[type] = listeners[type].filter(
        (_handler) => _handler !== handler
      );
    }
  }
}

if (canUseDOM) {
  Dimensions._update();
  window.addEventListener("resize", Dimensions._update, false);
}
