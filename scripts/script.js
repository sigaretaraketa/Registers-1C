document.addEventListener('click',
    function (event) {
        let target = event.target.closest('.copyticker');
        if (target) {
            event.preventDefault();
            navigator.clipboard.writeText(target.textContent);
            window.clearTimeout(target.timer);
            target.classList.add('copy');
            target.timer = window.setTimeout(_ => target.classList.remove('copy'), 300)
        }
    });


