
// little console checkers to see that i executing something at least on the webpage
console.log("I RAN SCRIPT");

console.log("2 times for fun");


// // array that gonna be used to store the words
let block = window.blockedWords;

let blockedWords2 = ["cat","the","lol","hi"];


  // Get all text nodes on the webpage
  let allTextNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

  let replacementWord = "|@@@@@@|";

  // Traverse through all text nodes per element in array:
for (let i = 0; i <=blockedWords2.length; i++){

  while (allTextNodes.nextNode()) {
    let textNode = allTextNodes.currentNode;
    let regex = new RegExp('\\b' + blockedWords2[i] + '\\b', 'gi'); // Match whole word, case-insensitive
    let replacedText = textNode.textContent.replace(regex, replacementWord);
    textNode.textContent = replacedText;

  }

    allTextNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

}


// other ways to do it:
// document.body.innerHTML = document.body.innerHTML.split("the ").join("|@@@@@@| ")

// document.body.innerHTML = document.body.innerHTML.replace(/the /gi, "|@@@@@@|");

// The fuction that replaces the words on screen based on the block array filled with words
// This one works but it breaks some pages like youtube cause innerHTML impacts the code of the
// html webpage itself as well as the text.
// function replaceWord(wordArray){
//     for(int = 0; int < wordArray.length; int += 1){
//         document.body.innerHTML = document.body.innerHTML.split(wordArray[int] + " ").join("|@@@@@@| ")
//     }
// };

