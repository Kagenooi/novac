import {
    adaptive
} from "../adaptiveMode/adaptive.js";
window.adaptive = adaptive;
adaptive();
window.addEventListener('resize', function () { adaptive(); });

import {
    placeholderAnimate,
    phoneCodes
} from "./module.js";
window.placeholderAnimate = placeholderAnimate;
placeholderAnimate();

window.phoneCodes = phoneCodes;
phoneCodes();

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
        const selectWrapper = document.querySelector('.phone__select_dropdown_scrolled');
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
            btnCode.innerHTML = phoneCode;
            
            let btnCountry = btn.querySelector('.country');
            btnCountry.innerHTML = country;

            let btnFlag = btn.querySelector('.flag');
            btnFlag.src = `https://flagcdn.com/${country.toLowerCase()}.svg`;

            selectCode.remove();
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


//  https://flagcdn.com/16x12/ua.png меняем ua