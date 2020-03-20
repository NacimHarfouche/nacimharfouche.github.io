let header = $("header");
let divHeader = $("header>div");

//au lancement de la page
$(() => {
	divHeader.hide().show(1300);
	console.log(document.location.href)
});

console.log(document.location.pathname);

// let footer = document.querySelector("footer");
// footer.textContent = `
// <p class="text-center">© 2019, All Rights Reserved - 
// <a href="https://github.com/NacimHarfouche" target="_blank" rel="noopener noreferrer">Nacim Harfouche</a>
// <a href="https://twitter.com/ArtesEveni" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
// <a href="https://www.linkedin.com/in/nacim-harfouche-912b14125/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
// </p>
// `;