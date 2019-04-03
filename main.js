// array that contains the characters
const arrayAllChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "%", ",", "!", "-", "#", "+", "&", "/"];
// get the generate button
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
    // array that containt the position of the chars and special Chars without the numbers
    let arrayCharAndSpe = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 36, 37, 38, 39, 40, 41, 42, 43];
    zeroOrOne = ""; // reset

    // get all the input (checkbox) from the dom in array
    let checkboxElts = document.querySelectorAll(".isItCheck");

    // look in the array if they are true or false, and assign a number
    // true = 1
    // false = 0
    // stock number
    let trueOrFalse = ""
    for (let one of checkboxElts) {
        if (one.checked) {
            trueOrFalse += 1;
        } else {
            trueOrFalse += 0;
        }
    }
    
    // compare the result number and proceed to the folow action
    switch (trueOrFalse) {
        case "0000":
            zeroOrOne = 3;
            symbol = -1;
        break;
        case "1000":
            zeroOrOne = 0;
            symbol = Math.floor(Math.random() * 26);
        break;
        case "1100":
            zeroOrOne = Math.floor(Math.random() * 2);
            symbol = Math.floor(Math.random() * 26);
        break;
        case "1110":
            zeroOrOne = Math.floor(Math.random() * 2);
            symbol = Math.floor(Math.random() * 36);
        break;
        case "1111":
            zeroOrOne = Math.floor(Math.random() * 2);
            symbol = Math.floor(Math.random() * tab.length);
        break;
        case "0100":
            zeroOrOne = 1;
            symbol = Math.floor(Math.random() * 26);
        break;
        case "0110":
            zeroOrOne = 1;
            symbol = Math.floor(Math.random() * 36);
        break;
        case "0111":
            zeroOrOne = 1;
            symbol = Math.floor(Math.random() * tab.length);
        break;
        case "0010":
            symbol = Math.floor(Math.random() * (36 - 26) + 26);
        break;
        case "0011":
            symbol = Math.floor(Math.random() * (tab.length - 26) + 26);
        break;
        case "0001":
            symbol = Math.floor(Math.random() * (tab.length - 36) + 36);
        break;
        case "1010":
            zeroOrOne = 0;
            symbol = Math.floor(Math.random() * 36);
        break;
        case "1011":
            zeroOrOne = 0;
            symbol = Math.floor(Math.random() * tab.length);
        break;
        case "1001":
            zeroOrOne = 0;
            symbol = arrayCharAndSpe[Math.floor(Math.random() * arrayCharAndSpe.length)];
        break;
        case "0101":
            zeroOrOne = 1;
            symbol = arrayCharAndSpe[Math.floor(Math.random() * arrayCharAndSpe.length)];
        break;
        case "1101":
            zeroOrOne = Math.floor(Math.random() * 2);
            symbol = arrayCharAndSpe[Math.floor(Math.random() * arrayCharAndSpe.length)];
    }
}

// on click it generate a pass
buttonElt.addEventListener("click", function() {
    // get the value of the chosen length
    chooseLength = document.getElementById("textinput").value;
    saveIt = ""; // reset
    
    for (let i = 0; i < chooseLength; i++) {
        randomNumber(arrayAllChars);
        // if no box are checked
        if (zeroOrOne === 3 && symbol === -1) {
            console.log("erreur");
            return;
        } else if (zeroOrOne === 1 && symbol < 26) {
            let upper = arrayAllChars[symbol].toUpperCase();
            saveIt += upper;
        } else {
            saveIt += arrayAllChars[symbol];
        }
    }
    inputElt.value = saveIt;
});

// button to copy the password
const buttonCopyElt = document.getElementById("copy");
const inputElt = document.getElementById("password");
buttonCopyElt.addEventListener("click", function() {
    inputElt.select();
    document.execCommand("copy");
});


