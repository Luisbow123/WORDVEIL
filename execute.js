
// Little console checkers to see that i am executing something at least on the webpage
console.log("I RAN SCRIPT");

console.log("2 times for fun");


// Array that will be used to store the blocked words
let blockedWords = ["the", "cat" ];


// This function is the one that replaces the words right now it is case sensetive right now 
// and doesn't work on capitalization or words that are plural
function replaceWord(wordArray){
    for(int = 0; int < wordArray.length; int += 1){
        let elements = document.querySelectorAll("p", "h1", "h2", "h3", "h4", "h5", "h6")
        elements.forEach(element => {
            element.innerText = element.innerText.split(wordArray[int] + " ").join("|@@@@@@| ");
        })
    }
};

// calling that function once
replaceWord(block);



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

