/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

import ExecutionEnvironment from "../../fbjs/lib/ExecutionEnvironment";

let doLeftAndRightSwapInRTL = true;
let isPreferredLanguageRTL = false;
let isRTLAllowed = true;
let isRTLForced = false;

const isRTL = () => {
  if (isRTLForced) {
    return true;
  }
  return isRTLAllowed && isPreferredLanguageRTL;
};

const onDirectionChange = () => {
  if (ExecutionEnvironment.canUseDOM) {
    if (document.documentElement && document.documentElement.setAttribute) {
      document.documentElement.setAttribute("dir", isRTL() ? "rtl" : "ltr");
    }
  }
};

const I18nManager = {
  allowRTL(bool) {
    isRTLAllowed = bool;
    onDirectionChange();
  },
  forceRTL(bool) {
    isRTLForced = bool;
    onDirectionChange();
  },
  getConstants() {
    return { doLeftAndRightSwapInRTL, isRTL: isRTL() };
  },
  setPreferredLanguageRTL(bool) {
    isPreferredLanguageRTL = bool;
    onDirectionChange();
  },
  swapLeftAndRightInRTL(bool) {
    doLeftAndRightSwapInRTL = bool;
  },
};

export default I18nManager;
