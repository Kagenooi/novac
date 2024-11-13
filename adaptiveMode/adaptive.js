export function adaptive() {
    const wrapper = document.querySelector('#adaptive');
    let zoom = document.body.clientWidth / 19.2 / 100;
    if (document.body.clientWidth > 1380 && document.body.clientWidth < 1440) {
        zoom = document.body.clientWidth / 14.4 / 100;
    }
    if (document.body.clientWidth > 980 && document.body.clientWidth < 1280) {
        zoom = document.body.clientWidth / 12.8 / 100;
    }
    if (document.body.clientWidth > 520 && document.body.clientWidth < 981) {
        zoom = document.body.clientWidth / 7.68 / 100;
    }
    if (document.body.clientWidth < 521) {
        zoom = document.body.clientWidth / 3.6 / 100;
    }
    wrapper.style.zoom = zoom;

    const wrappers = document.querySelectorAll('.wrapper');
    for (let i = 0; i < wrappers.length; i++) {
        wrappers[i].style.minHeight = `${window.innerHeight / zoom}px`;
    }
}