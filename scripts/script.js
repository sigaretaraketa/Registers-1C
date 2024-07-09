// document.addEventListener('click',
//     function (event) {
//         let target = event.target.closest('.copyticker');
//         if (target) {
//             event.preventDefault();
//             navigator.clipboard.writeText(target.textContent);
//             window.clearTimeout(target.timer);
//             target.classList.add('copy');
//             target.timer = window.setTimeout(_ => target.classList.remove('copy'), 300)
//         }
//     });


// const copyLinks = document.querySelectorAll('.copy-link');

// copyLinks.forEach((link) => {
//     link.addEventListener('click', async (event) => {
//         event.preventDefault();
//         const linkText = link.title;

//         try {
//             const decodedLinkText = decodeURI(linkText);

//             await navigator.clipboard.writeText(decodedLinkText);

//         } catch (err) {
//             console.error('Failed to copy text: ', err);
//         }
//     });
// });
