const counters = document.querySelectorAll('.counter');

/*** Using forEach() ***/

counters.forEach((counter) => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const divider = 5000;
        const speed = 5;

        const inc = target / divider;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, speed);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});
