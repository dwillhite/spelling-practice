/*main_scripts*/

//GLOBALS
var words = ["where", "when", "we're", "how", "who", "here", "they"],                   //array filled with spelling words
    showWord = document.getElementById('showButton'),
    done = document.getElementById('doneButton');
    //word1 = document.getElementById('word1').innerHTML;

//EVENT LISTENERS
document.getElementById('showButton').addEventListener("onclick", whatWord);
document.getElementById('doneButton').addEventListener("onclick", doneB);
document.getElementById('input1').addEventListener("onfocus", btnChange);
document.getElementById('input1').addEventListener("submit", doneB);

//FUNCTIONS
function whatWord() {
    var wordSelect = words[Math.floor(Math.random()*words.length)];     //picks a random word from the array
    document.getElementById('word1').innerHTML = wordSelect;
}
function btnChange() {                                                 //removes the "click to spell" placeholder text
    document.getElementById('input1').placeholder = "";
}
function btnBack() {                                                     //replaces the placeholder text
    document.getElementById('input1').value = "";
    document.getElementById('input1').placeholder = "Click To Spell";
}

function doneB() {                                                     //when doneButton is clicked checks word1 with user response (rspns)
    var thumbsup = "\f087"
        word1 = document.getElementById('word1').innerHTML,
        rspns = document.getElementById('response').innerHTML,
        wordValue = document.getElementById('input1').value;

    if (word1 === wordValue) {
        document.getElementById('response').innerHTML = "Way To Go! " + thumbsup;
    }else {
        document.getElementById('response').innerHTML = "Incorrect!  Try Again!";
    }
}
function clearResp() {                                               //clears the response when show new word button is clicked
    document.getElementById('response').innerHTML = "";
}

//EVENT HANDLERS
showWord.onclick = function() {
    whatWord();
    clearResp();
    btnBack();
}
done.onclick = function() {
    doneB();
}
done.onsubmit = function () {
    doneB();
}
