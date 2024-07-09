const copyLinks = document.querySelectorAll('.copy-link');

copyLinks.forEach((link) => {
    link.addEventListener('click', async (event) => {
        event.preventDefault();
        const linkText = link.title;

        try {
            const decodedLinkText = decodeURI(linkText);

            await navigator.clipboard.writeText(decodedLinkText);

        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    });
});