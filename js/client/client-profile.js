import {
    adaptive
} from "../../adaptiveMode/adaptive.js";
window.adaptive = adaptive;
adaptive();
window.addEventListener('resize', function () { adaptive(); });

import {
    placeholderAnimate,
    addFileLabel,
    transactionTabs,
    toggleActive,
    chooseOption,
    accordion
} from "../module.js";

window.toggleActive = toggleActive;
window.chooseOption = chooseOption;

document.querySelector('#defaultOption').click();

window.addFileLabel = addFileLabel;
addFileLabel();

window.placeholderAnimate = placeholderAnimate;
placeholderAnimate();

window.transactionTabs = transactionTabs;
transactionTabs();

window.accordion = accordion;
accordion();