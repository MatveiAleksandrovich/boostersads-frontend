function animateMarquee(el, duration) {
    const innerEl = el.querySelector('.ticker-inner');
    const innerWidth = innerEl.offsetWidth;
    const cloneEl = innerEl.cloneNode(true);
    el.appendChild(cloneEl);

    let start = performance.now();
    let progress;
    let translateX;

    requestAnimationFrame(function step(now) {
        progress = (now - start) / duration;

        if (progress > 1) {
            progress %= 1;
            start = now;
        }

        translateX = innerWidth * progress;

        innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
        cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
        requestAnimationFrame(step);
    });
}

const marquee1 = document.querySelector('#ticker');
const marquee2 = document.querySelector('#ticker2');
const marquee3 = document.querySelector('#ticker3');

animateMarquee(marquee1, 23000);
animateMarquee(marquee2, 23000);
animateMarquee(marquee3, 23000);