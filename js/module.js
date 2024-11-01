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