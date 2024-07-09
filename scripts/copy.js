const copyLinks = document.querySelectorAll('.copy-link'),
    toast = document.querySelector(".toast");
(closeIcon = document.querySelector(".close")),
    (progress = document.querySelector(".progress"));
let timer1, timer2;


copyLinks.forEach((link) => {
    link.addEventListener('click', async (event) => {

        event.preventDefault();
        const linkText = link.title;
        toast.classList.add("active");
        progress.classList.add("active");

        timer1 = setTimeout(() => {
            toast.classList.remove("active");
        }, 1000); //1s = 1000 milliseconds

        timer2 = setTimeout(() => {
            progress.classList.remove("active");
        }, 1300);

        try {
            const decodedLinkText = decodeURI(linkText);

            await navigator.clipboard.writeText(decodedLinkText);

        } catch (err) {
            console.error('Failed to copy text: ', err);
        }

    });
});
closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");

    setTimeout(() => {
        progress.classList.remove("active");
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
});