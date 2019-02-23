// array that contains the characters
const tab = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "%", ",", "!", "-", "#", "+", "&", "/"];
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
    symbol = Math.floor(Math.random() * tab.length);
    zeroOrOne = Math.floor(Math.random() * 2);
}

// on click it generate a pass
buttonElt.addEventListener("click", function() {
    // get the value of the chosen length
    chooseLength = document.getElementById("textinput").value;
    saveIt = "";
    for (let i = 0; i < chooseLength; i++) {
        randomNumber(tab);
        if (zeroOrOne === 1 && symbol < 26) {
            let upper = tab[symbol].toUpperCase();
            saveIt += upper;
        } else {
            saveIt += tab[symbol];
        }
    }
    paraElt.textContent = saveIt;
    inputElt.value = saveIt;
    console.log(saveIt);
});

////////////////////////////////////////////////////
const buttonCopyElt = document.getElementById("copy");
const inputElt = document.getElementById("password");
buttonCopyElt.addEventListener("click", function() {
    inputElt.select();
    document.execCommand("copy");
});