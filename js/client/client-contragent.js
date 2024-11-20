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
    chooseOption
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

const contragentDetailsBtns = document.querySelectorAll('.contragent__orders_btns_btn');
const contragentDetailsTabs = document.querySelectorAll('.contragent__orders_tab');
for (let i = 0; i < contragentDetailsBtns.length; i++) {
    contragentDetailsBtns[i].addEventListener('click', function() {
        for (let x = 0; x < contragentDetailsTabs.length; x++) {
            contragentDetailsTabs[x].classList.remove('active');
            contragentDetailsBtns[x].classList.remove('active');
        }
        document.querySelector(`#${this.dataset.tab}`).classList.add('active');
        this.classList.add('active');
    })
}
document.querySelector('#defaultTab').click();