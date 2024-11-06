import {
    adaptive
} from "../../adaptiveMode/adaptive.js";
window.adaptive = adaptive;
adaptive();
window.addEventListener('resize', function () { adaptive(); });

import {
    placeholderAnimate
} from "../module.js";
window.placeholderAnimate = placeholderAnimate;
placeholderAnimate();