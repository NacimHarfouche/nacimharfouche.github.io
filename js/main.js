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
buttonElt.ariaLabel = "to go up";

buttonElt.appendChild(iElt);
document.body.appendChild(buttonElt);

// When the user scrolls down 20px, show the button
window.onscroll = () => {
	buttonElt.style.display = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? "block" : "none";
};

// When the user clicks on the button, scroll to the top smoothly
buttonElt.addEventListener("click", () => {
	document.body.scrollTo({ top: 0, behavior: 'smooth' });
	document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
});

// Click on nav link to close mobile menu
for (let a of aInNavElt) {
	a.addEventListener("click", function () {
		if (window.screen.width <= 991) {
			buttonHeaderElt.click();
		}
	});
}