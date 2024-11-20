import {
    adaptive
} from "../adaptiveMode/adaptive.js";
window.adaptive = adaptive;
adaptive();
window.addEventListener('resize', function () { adaptive(); });

import {
    placeholderAnimate,
} from "./module.js";
window.placeholderAnimate = placeholderAnimate;
placeholderAnimate();


const selectWrapper = document.querySelector('.phone__select_dropdown_scrolled');

fetch('https://countriesnow.space/api/v0.1/countries/codes', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const selectCode = document.querySelector('.selectCode');
        let classValue = selectCode.classList;
        let selectCodeInner = selectCode.innerHTML;
        let massive = data.data;
        for (let i = 0; i < massive.length; i++) {
            const element = massive[i];
            let phoneCode = element.dial_code;
            let country = element.code;
            let btn = document.createElement('button');
            selectWrapper.append(btn);
            btn.setAttribute('type', 'button');
            btn.setAttribute('value', phoneCode);
            for (let x = 0; x < classValue.length; x++) {
                btn.classList.add(`${classValue[x]}`);
            }
            btn.innerHTML = selectCodeInner;
            let btnCode = btn.querySelector('.code');
            btnCode.innerHTML = phoneCode.replaceAll(' ', '');

            let btnCountry = btn.querySelector('.country');
            btnCountry.innerHTML = country;

            let btnFlag = btn.querySelector('.flag');
            btnFlag.src = `https://flagcdn.com/${country.toLowerCase()}.svg`;

            selectCode.remove();
        }

        const phoneWrapper = document.querySelector('.phone');
        const chooseCode = selectWrapper.querySelectorAll('.selectCode');
        for (let i = 0; i < chooseCode.length; i++) {
            chooseCode[i].addEventListener('click', function () {
                let checkedBtn = phoneWrapper.querySelector('.checked');
                let checkedCode = checkedBtn.querySelector('.code');
                let checkedCountry = checkedBtn.querySelector('.country');
                let checkedFlag = checkedBtn.querySelector('.flag');
                checkedCode.innerHTML = this.value.replaceAll(' ', '');
                checkedCountry.innerHTML = massive[i].code;
                checkedFlag.src = `https://flagcdn.com/${massive[i].code.toLowerCase()}.svg`;
                document.querySelector('.phone__select_dropdown').classList.remove('active');
                document.querySelector('#phoneCodeHidden').value = massive[i].dial_code;
            })
        }
        chooseCode[0].click();
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

const phoneBtn = document.querySelector('.phone__select_btn');
console.log(phoneBtn);

phoneBtn.addEventListener('click', function () {
    console.log(this.nextElementSibling);

    if (this.nextElementSibling.classList.contains('active')) {
        this.nextElementSibling.classList.remove('active');
    } else {
        this.nextElementSibling.classList.add('active');
    }
})