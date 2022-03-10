/*****************************
 * Variable
 *****************************/
// let header = $("header");
let aInNavElt = document.querySelectorAll("header nav div div a");
let buttonHeaderElt = document.querySelector("header button");
// create a year variable
let year = new Date().getFullYear();
// get the span year in the footer
let footerSpanYearElt = document.getElementById("year");


 /****************************
  * Function
  ****************************/
// function loadContentDOM(item) {
// 	$("<section>").addClass("rounded").html(item).appendTo("main");
// }

/****************************
 * at the launch of the page
 ****************************/
(() => {
	//divHeader.hide().show(1300);
	//console.log(document.location.href);
});

// add the current year in the footer
footerSpanYearElt.textContent = ""+ year;

// **buttton to go to the top**
// create i element
let iElt = document.createElement("i");
iElt.className = "fas fa-chevron-up";
iElt.ariaHidden = "true";
// create a button element
let buttonElt = document.createElement("button");
buttonElt.id = "myBtnToTop";
buttonElt.ariaLabel = "to go up";

// append the element in the DOM
buttonElt.appendChild(iElt);
document.body.appendChild(buttonElt);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
	buttonElt.style.display = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? "block" : "none";
};

// When the user clicks on the button, scroll to the top of the document smoothly
buttonElt.addEventListener("click", () => {
	document.body.scrollTo({ top: 0, behavior: 'smooth' }); // For Safari
	document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
});

// without Jquery
// click on nav link to close it
for (let a of aInNavElt) {
	a.addEventListener("click", function() {
		if (window.screen.width <= 991) {
			buttonHeaderElt.click();
		}
	});
}

// ----------------------------------------------------------------------------------------

// $("*").each( function () {
//     var $this = $(this);
//     if (parseInt($this.css("fontSize")) < 12) {
//         $this.css({ "font-size": "12px" });   
//     }
// });

// to set all elements to a minimal font size of 12px
// var elements = document.querySelectorAll("*");
// for (let element of elements) {
// 	let EltFontSize = element.computedStyleMap().get('font-size').value;
// 	console.log(EltFontSize)
// 	console.log(getComputedStyle(element)["fontSize"].replace(/px/gi, ""))
// 	if (parseInt(EltFontSize) < 12) {
// 		element.style.fontSize = "0";
// 		element.style.fontSize = "1.2rem";
// 	}
//}

//-----------------------------------------------------------------------------------------------

//line add for commit -> forcing