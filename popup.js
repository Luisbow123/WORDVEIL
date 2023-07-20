


const addButton = document.querySelector("#getButton");

// word that was just inputed if any
let currWord = "";

// this is the function that defines what the EnterWord button does on "click"
addButton.addEventListener("click", () => {
  currWord = window.prompt("Enter word to be blocked");
  
  if(!currWord.includes(" ")){
    addWord(currWord);
  }else{
    window.alert("Must not include spaces/ seperate by commas only if including multiple words");
  }

  // let newWord = document.createElement("li");
  // newWord.textContent = currWord;
  // console.log(newWord);
  // document.querySelector("#blockedWords").append(newWord);
  }
);

// should make the hidden div edditable
// document.querySelector("#wordList").contentEditable = true;

// function that refreshes the page
function refreshButtonFunc (){
  chrome.tabs.reload();
}

// getting the refresh button and adding an eventlistener to use the refresh function
const refreshButton = document.querySelector("#refreshPage");
refreshButton.addEventListener("click", refreshButtonFunc);

// this grabs the second button the open word list button and opens a html on "click"
const seeList = document.querySelector("#listPopup");
seeList.addEventListener("click", () => openPopup());



// fuction that opens a popup of size 500/300 using the ID of the html element as an argument
async function openPopup() {

  let list = await getWords();

  window.alert(list);
}

const removeButton = document.querySelector("#removeButton");
removeButton.addEventListener("click", () => {removeWord(window.prompt("Enter word to remove"))});