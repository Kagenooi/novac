import {
    adaptive
} from "../../adaptiveMode/adaptive.js";
window.adaptive = adaptive;
adaptive();
window.addEventListener('resize', function () { adaptive(); });

import {
    placeholderAnimate,
    addFileLabel,
    toggleActive,
    chooseOption,
    accordion
} from "../module.js";

window.toggleActive = toggleActive;
window.chooseOption = chooseOption;

window.addFileLabel = addFileLabel;
addFileLabel();

window.placeholderAnimate = placeholderAnimate;
placeholderAnimate();

window.accordion = accordion;
accordion();