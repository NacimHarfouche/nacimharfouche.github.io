/**
 * Variable
 */
let header = $("header");

const htmlContent = {
	en: {
		home: "home en",
		myProjet: "",
		aboutMe: "",
		contact: ""
	},
	fr: {
		home: "home fr",
		myProjet: "",
		aboutMe: "",
		contact: ""
	}
}

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
// buttonElt.textContent = "Top";

// append the element in the DOM
buttonElt.appendChild(iElt);
document.body.appendChild(buttonElt);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
	buttonElt.style.display = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? "block" : "none";
};

// When the user clicks on the button, scroll to the top of the document
buttonElt.addEventListener("click", () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// click on nav link
$('header nav div div a').click(() => {
	// screen width tab or mobile
	if ($(window).width() <= 991) {
		$('header button').click();
	}
	// empty main
	$('main').empty();

	// for the EN and FR version
	if (/\/en\//i.test(document.location.pathname)) {
		console.log(htmlContent.en.home);
		loadContentDOM(htmlContent.en.home);
	} else {
		console.log(htmlContent.fr.home);
		loadContentDOM(htmlContent.fr.home)
	}
	//$("section").addClass("rounded");
	
});