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
    const tabs = document.querySelectorAll('.transaction__tabs_item');
    let index = 0; 
    const transPrev = document.querySelector('#transPrev');
    const transNext = document.querySelector('#transNext');
    transPrev.addEventListener('click', function() {
        this.dataset.index = index;
        transNext.dataset.index = index;
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('active');
        }
        if (index > 0) {
            index = index - 1;
        }
        tabs[index].classList.add('active');
        this.dataset.index = index;
        transNext.dataset.index = index;
    });
    transNext.addEventListener('click', function() {
        this.dataset.index = index;
        transPrev.dataset.index = index;
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('active');
        }
        if (index < tabs.length - 1) {
            index = index + 1;
        }
        console.log(index);
        
        tabs[index].classList.add('active');
        this.dataset.index = index;
        transPrev.dataset.index = index;
    });
}