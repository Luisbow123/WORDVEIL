
// Little console checkers to see that i am executing something at least on the webpage
console.log("I RAN SCRIPT");

console.log("2 times for fun");


// Array that will be used to store the blocked words
let blockedWords = ["the", "cat" ];

// The fuction that replaces the words on screen based on the block array filled with words
// function replaceWord(wordArray){
//     for(int = 0; int < wordArray.length; int += 1){
//         document.body.innerHTML = document.body.innerHTML.split(wordArray[int] + " ").join("|@@@@@@| ")

//     }
// };

// calling that function once
replaceWord(block);


console.log('children'.length);
console.log(document.childNodes);
console.log(document.children);

function replaceWord(wordArray){
    for(int = 0; int < wordArray.length; int += 1){
        let elements = document.querySelectorAll("p")
        elements.forEach(element => {
            element.innerText = element.innerText.split(wordArray[int] + " ").join("|@@@@@@| ");
        })
    }
}




// other ways to do it:
// document.body.innerHTML = document.body.innerHTML.split("the ").join("|@@@@@@| ")

// document.body.innerHTML = document.body.innerHTML.replace(/the /gi, "|@@@@@@|");


