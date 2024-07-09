// Get all links with the class "copy-link"
const copyLinks = document.querySelectorAll('.copy-link');

// Add a click event listener to each link
copyLinks.forEach((link) => {
    link.addEventListener('click', async (event) => {
        event.preventDefault();
        const linkText = link.title;

        try {
            // Decode the link text to handle non-ASCII characters
            const decodedLinkText = decodeURI(linkText);

            // Copy the decoded link text to the clipboard
            await navigator.clipboard.writeText(decodedLinkText);

            // Provide feedback to the user
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    });
});