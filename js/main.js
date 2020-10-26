/**
 * Variable
 */
let header = $("header");


 /**
  * Function
  */
function loadContentDOM(item) {
	$("<section>").addClass("rounded").html(item).appendTo("main");
}

/**
 * at the launch of the page
 */
$(() => {
	//divHeader.hide().show(1300);
	//console.log(document.location.href);
});

/**
 * button go to top
 */
// create i
let iElt = document.createElement("i");
iElt.className = "fas fa-chevron-up";
// create a button
let buttonElt = document.createElement("button");
buttonElt.id = "myBtnToTop";

// append the element in the DOM
buttonElt.appendChild(iElt);
document.body.appendChild(buttonElt);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
	buttonElt.style.display = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? "block" : "none";
};

// When the user clicks on the button, scroll to the top of the document
buttonElt.addEventListener("click", () => {
	//document.body.scrollTop = 0; // For Safari
	//document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	document.body.scrollTo({ top: 0, behavior: 'smooth' }); // For Safari
	document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
});

// click on nav link
$('header nav div div a').click(function()  {
	// screen width tab or mobile
	if ($(window).width() <= 991) {
		$('header button').click();
	}

	// for the EN and FR version
	// let htmlContentLanguage;
	// if (/\/en\//i.test(document.location.pathname)) {
	// 	htmlContentLanguage = htmlContent.en;
	// } else {
	// 	htmlContentLanguage = htmlContent.fr;
	// }
});


// ----------------------------------------------------------------------------------------

// $("*").each( function () {
//     var $this = $(this);
//     console.log($this)
//     if (parseInt($this.css("fontSize")) < 12) {
//         $this.css({ "font-size": "12px" });   
//     }
// });

// to set all elements to a minimal font size of 12px
var elements = document.querySelectorAll("*");
// for (let element of elements) {
// 	let EltFontSize = element.computedStyleMap().get('font-size').value;
// 	console.log(EltFontSize)
// 	console.log(getComputedStyle(element)["fontSize"].replace(/px/gi, ""))
// 	if (EltFontSize < 12) {
// 		element.style.fontSize = "0";
// 		element.style.fontSize = "1.2rem";
// 	}
// }
// console.log("end")

// for (let element of elements) {
// 	let EltFontSize = element.computedStyleMap().get('font-size').value;
// 	if (EltFontSize < 12) {
// 		console.log(element, EltFontSize)
// 	}
// }

//-----------------------------------------------------------------------------------------------
