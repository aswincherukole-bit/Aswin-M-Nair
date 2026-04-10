// COUNTER ANIMATION
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    let target = +counter.getAttribute('data-target');
    let count = 0;

    let update = () => {
        count += target / 100;
        if (count < target) {
            counter.innerText = Math.floor(count);
            requestAnimationFrame(update);
        } else {
            counter.innerText = target;
        }
    };

    update();
});
