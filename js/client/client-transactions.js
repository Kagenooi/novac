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

const orderDetailsBtns = document.querySelectorAll('.orderDetails__info_btns_btn');
const orderDetailsTabs = document.querySelectorAll('.orderDetails__info_tab');
for (let i = 0; i < orderDetailsBtns.length; i++) {
    orderDetailsBtns[i].addEventListener('click', function() {
        for (let x = 0; x < orderDetailsTabs.length; x++) {
            orderDetailsTabs[x].classList.remove('active');
            orderDetailsBtns[x].classList.remove('active');
        }
        document.querySelector(`#${this.dataset.tab}`).classList.add('active');
        this.classList.add('active');
    })
}
document.querySelector('#defaultTab').click();