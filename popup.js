

// seeing that i can access the data.js global variables from here
console.log(window.blockedWords);

const addWord = document.querySelector("#getWord");
// word that was just inputed if any
let currWord = "";
// list item that will be inputed into our word list popup
// let newWord = document.createElement("li");

// should make the hidden div edditable
document.querySelector("#wordList").contentEditable = true;

const refreshButton = document.querySelector("#refreshPage");
refreshButton.addEventListener("click", () => {window.location.ta;})

// this is the function that defines what the EnterWord button does on "click"
addWord.addEventListener("click", () => {
  currWord = window.prompt("Enter word to be blocked");
  window.blockedWords.push(currWord);

  console.log(window.blockedWords);

  let newWord = document.createElement("li");
  newWord.textContent = currWord;
  console.log(newWord);
  document.querySelector("#blockedWords").append(newWord);
  }
);


// this grabs the second button the open word list button and opens a html on "click"
const seeList = document.querySelector("#listPopup");
seeList.addEventListener("click", () => {openPopup(sectionID)});

// adding the ID for the words being blocked list to use in the openPopup function below
let sectionID = "wordList"


// fuction that opens a popup of size 500/300 using the ID of the html element as an argument
function openPopup(sectionId) {
  // Get the section of HTML that you want to open as a popup.
  let section = document.getElementById(sectionId);

  // Create a new window with the specified attributes.
  let popupWindow = window.open('', 'popup', 'width=500,height=300');

  // Insert the HTML section into the popup window.
  popupWindow.document.body.innerHTML = section.innerHTML;
}




