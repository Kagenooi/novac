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
    accordion,
    showPossword
} from "../module.js";

window.toggleActive = toggleActive;
window.chooseOption = chooseOption;
window.showPossword = showPossword;
showPossword();

document.querySelector('#defaultOption').click();

window.addFileLabel = addFileLabel;
addFileLabel();

window.placeholderAnimate = placeholderAnimate;
placeholderAnimate();

window.transactionTabs = transactionTabs;
transactionTabs();

window.accordion = accordion;
accordion();

const userData = document.querySelector('.profile__details_user');
function setDisabled() {
    const fieldDefault = userData.querySelectorAll('.fieldDefault');
    for (let i = 0; i < fieldDefault.length; i++) {
        let fieldDefaultInp = fieldDefault[i].querySelector('input');
        let fieldDefaultPlaceholder = fieldDefault[i].querySelector('.placeholder');
        fieldDefaultInp.setAttribute('disabled', '');
        userData.querySelector('.profile__details_user_wrapper').style.opacity = '.5';
        userData.querySelector('.profile__details_user_wrapper').classList.add('inactive');
        if (fieldDefaultInp.value) {
            fieldDefaultPlaceholder.classList.add('none');
        } else {
            fieldDefaultPlaceholder.classList.remove('none');
        }
    }
}
setDisabled();

const saveChanges = userData.querySelector('#saveChanges');
const saveChangesBtn = userData.querySelector('#save');
const cancelChangesBtn = userData.querySelector('#cancel')
const changeData = userData.querySelector('#changeData');
const userDataInputs = userData.querySelectorAll('input');
const placeholders = userData.querySelectorAll('.placeholder')

for (let i = 0; i < userDataInputs.length; i++) {
    userDataInputs[i].dataset.value = userDataInputs[i].value;
}

changeData.addEventListener('click', function () {
    for (let i = 0; i < userDataInputs.length; i++) {
        userDataInputs[i].removeAttribute('disabled', '');
    }
    userData.querySelector('.profile__details_user_wrapper').style.opacity = '1';
    userData.querySelector('.profile__details_user_wrapper').classList.remove('inactive');
    saveChanges.classList.add('active');
    this.classList.add('inactive');
})

saveChangesBtn.addEventListener('click', function () {
    saveChanges.classList.remove('active');
    changeData.classList.remove('inactive');
    for (let i = 0; i < userDataInputs.length; i++) {
        placeholders[i].classList.remove('active');
        userDataInputs[i].setAttribute('disabled', '');
        userDataInputs[i].dataset.value = userDataInputs[i].value;
    }
    userData.querySelector('.profile__details_user_wrapper').style.opacity = '.5';
    userData.querySelector('.profile__details_user_wrapper').classList.add('inactive');
    setDisabled();
})

cancelChangesBtn.addEventListener('click', function () {
    saveChanges.classList.remove('active');
    changeData.classList.remove('inactive');
    for (let i = 0; i < userDataInputs.length; i++) {
        placeholders[i].classList.remove('active');
        userDataInputs[i].setAttribute('disabled', '');
        userDataInputs[i].value = userDataInputs[i].dataset.value;
    }
    userData.querySelector('.profile__details_user_wrapper').classList.add('inactive');
    userData.querySelector('.profile__details_user_wrapper').style.opacity = '.5';
    setDisabled();
})


const emailInp = document.querySelector('#email');
emailInp?.setAttribute('disabled', '');
emailInp?.classList.add('inactive');