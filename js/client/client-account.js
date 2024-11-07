import {
    adaptive
} from "../../adaptiveMode/adaptive.js";
window.adaptive = adaptive;
adaptive();
window.addEventListener('resize', function () { adaptive(); });

import {
    placeholderAnimate,
    addFileLabel,
    transactionTabs
} from "../module.js";

window.addFileLabel = addFileLabel;
addFileLabel();

window.placeholderAnimate = placeholderAnimate;
placeholderAnimate();

window.transactionTabs = transactionTabs;
transactionTabs();