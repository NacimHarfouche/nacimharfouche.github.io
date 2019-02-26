// array that contains the characters
const arrayChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "%", ",", "!", "-", "#", "+", "&", "/"];
// button
let buttonElt = document.getElementById("generate");

// stock random number
let symbol = new Number();
let zeroOrOne = new Number();

// stock the chosen password length
let chooseLength;

// display the generate pass in the paragraph (DOM)
let paraElt = document.getElementById("para");

// stock the pass before he is push in the para
let saveIt = new String();

// generates a random number
function randomNumber(tab) {
    let inputLowerElt = document.getElementById("lowerCase").checked;
    let inputUpperElt = document.getElementById("upperCase").checked;
    let inputSpecialElt = document.getElementById("specialChar").checked;
    zeroOrOne = ""; // reset
    symbol = Math.floor(Math.random() * tab.length);
    if (inputLowerElt === true && inputUpperElt === true) {
        zeroOrOne = Math.floor(Math.random() * 2);
    } else if (inputLowerElt === false && inputUpperElt === true) {
        zeroOrOne = 1;
    } else if (inputLowerElt === true && inputUpperElt === false) {
        zeroOrOne = 0;
    }
}

// on click it generate a pass
buttonElt.addEventListener("click", function() {
    // get the value of the chosen length
    chooseLength = document.getElementById("textinput").value;
    saveIt = ""; // reset
    for (let i = 0; i < chooseLength; i++) {
        randomNumber(arrayChars);
        if (zeroOrOne === 1 && symbol < 26) {
            let upper = arrayChars[symbol].toUpperCase();
            saveIt += upper;
        } else {
            saveIt += arrayChars[symbol];
        }
    }
    inputElt.value = saveIt;
    console.log(saveIt);
});

// button to copy the password
const buttonCopyElt = document.getElementById("copy");
const inputElt = document.getElementById("password");
buttonCopyElt.addEventListener("click", function() {
    inputElt.select();
    document.execCommand("copy");
});


