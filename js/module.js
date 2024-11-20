export function placeholderAnimate() {
    const inp = document.querySelectorAll('.input');
    for (let i = 0; i < inp.length; i++) {
        inp[i].addEventListener('input', function () {
            let placeH = this.parentNode.querySelector('.placeholder');
            if (this.value) {
                placeH.classList.add('active');
            } else {
                placeH.classList.remove('active');
            }
        })
    }
}

export function addFileLabel() {
    const inputFile = document.querySelectorAll('.inputFile');
    const clearFile = document.querySelectorAll('.clearFile');

    for (let i = 0; i < inputFile.length; i++) {
        inputFile[i].addEventListener('change', function () {
            let inputParent = this.parentNode;
            let fakeText = inputParent.querySelector('.fakeText');
            fakeText.innerHTML = this.files[0].name;
        });

        clearFile[i].addEventListener('click', function () {
            let btnParent = this.parentNode;
            btnParent = btnParent.parentNode;
            let fakeText = btnParent.querySelector('.fakeText');
            fakeText.innerHTML = fakeText.dataset.defaulttext;
            inputFile[i].value = null
        });
    }
}

export function transactionTabs() {
    let index = 0;

    const tabs = document.querySelectorAll('.transaction__tabs_item');
    const steps = document.querySelectorAll('.transaction__steps_title');

    const transPrev = document.querySelector('#transPrev');
    const transNext = document.querySelector('#transNext');

    transPrev.addEventListener('click', function () {
        this.dataset.index = index;
        transNext.dataset.index = index;
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('active');
            steps[i].classList.remove('active');
        }
        if (index > 0) {
            index = index - 1;
        }
        tabs[index].classList.add('active');
        steps[index].classList.add('active');
        this.dataset.index = index;
        transNext.dataset.index = index;
    });

    transNext.addEventListener('click', function () {
        this.dataset.index = index;
        transPrev.dataset.index = index;
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('active');
            steps[index].classList.remove('active');
        }
        if (index < tabs.length - 1) {
            index = index + 1;
        }
        tabs[index].classList.add('active');
        steps[index].classList.add('active');
        this.dataset.index = index;
        transPrev.dataset.index = index;
    });
}

export function toggleActive(elem) {
    document.querySelector(`#${elem}`).classList.toggle('active');
}

export function chooseOption(elem, selected) {
    document.querySelector(`#${selected}`).innerHTML = elem.innerHTML;
}


export function accordion() {
    const acc = document.querySelectorAll('.accordion');
    for (let i = 0; i < acc.length; i++) {
        let accBtn = acc[i].querySelector('.accordion__btn');
        let accWrapper = acc[i].querySelector('.accordion__wrapper');
        accBtn.addEventListener('click', function () {
            if (accWrapper.style.maxHeight) {
                accWrapper.style.maxHeight = null;
            } else {
                accWrapper.style.maxHeight = accWrapper.style.maxHeight + accWrapper.scrollHeight + 'px';
            }
        })
    }
}

export function showPossword() {
    const showToggle = document.querySelectorAll('.password__showHide');
    for (let i = 0; i < showToggle.length; i++) {
        showToggle[i].addEventListener('click', function () {
            if (this.parentNode.querySelector('input').getAttribute('type') != 'password') {
                this.parentNode.querySelector('input').setAttribute('type', 'password');
            } else {
                this.parentNode.querySelector('input').setAttribute('type', 'text');
            }
        })
    }
}



export function phoneCodes() {
    
}