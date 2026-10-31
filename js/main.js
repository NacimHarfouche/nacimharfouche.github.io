/*****************************
 * Variable
 *****************************/
let aInNavElt = document.querySelectorAll("header nav div div a");
let buttonHeaderElt = document.querySelector("header button");
let year = new Date().getFullYear();
let footerSpanYearElt = document.getElementById("year");

/****************************
 * At the launch of the page
 ****************************/

// Add the current year in the footer
footerSpanYearElt.textContent = "" + year;

// **Button to go to the top**
let iElt = document.createElement("i");
iElt.className = "fas fa-chevron-up";
iElt.ariaHidden = "true";

let buttonElt = document.createElement("button");
buttonElt.id = "myBtnToTop";
// Each page carries its own language (index.html in French, en/index.html in English)
buttonElt.ariaLabel = document.documentElement.lang === "fr" ? "Remonter en haut de la page" : "Back to top";

buttonElt.appendChild(iElt);
document.body.appendChild(buttonElt);

// When the user scrolls down 20px, show the button
window.onscroll = () => {
	buttonElt.style.display = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? "block" : "none";
};

// When the user clicks on the button, scroll to the top (smoothly, unless reduced motion is requested)
buttonElt.addEventListener("click", () => {
	let behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
	document.body.scrollTo({ top: 0, behavior: behavior });
	document.documentElement.scrollTo({ top: 0, behavior: behavior });
});

// Click on nav link to close mobile menu
for (let a of aInNavElt) {
	a.addEventListener("click", function () {
		if (window.screen.width <= 991) {
			buttonHeaderElt.click();
		}
	});
}