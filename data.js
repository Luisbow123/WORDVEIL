checkStorage();

//Array to store user words:
var blockedWords = ["the", "cat"];

//Saves an array to Chrome Storage:
function saveWords(array){
    chrome.storage.local.set({ key1: array }).then(() => {
        console.log("Value is set");
    });
}

//Function for first time run to avoid Chrome Storage issues:
async function checkStorage (){
let array = await getWords();

if(array == undefined){
let emptyArray = [];
saveWords(emptyArray);
}

}

//Function that produces to key to store on Google Storage:
async function getWords() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(["key1"], (result) => {
            if (chrome.runtime.lastError) {
                // Handle any error that might occur during retrieval
                reject(chrome.runtime.lastError);
            } else {
                console.log("Value currently is " + result.key1);
                resolve(result.key1);
            }
        });
    });
}

// function to add 1 word to the list in chrome storage
async function addWord(word){
    console.log("started adding");
    let currWords = await getWords();

    if (word.includes(",")){

        word = word.split(",");

        for (let i = 0; i <= word.length; i++) {

            currWords.push(word[i]);

        }

        saveWords(currWords);

    } else {

    currWords.push(word);
    saveWords(currWords);

    }
}

// function to remove a word from the list stored in chrome
async function removeWord(wordToRemove){

    console.log("started removing");
    let currWords = await getWords();

    let indexToRemove = currWords.indexOf(wordToRemove);

    if (indexToRemove > -1) {
        currWords.splice(indexToRemove, 1);
        console.log(currWords);
        saveWords(currWords);
    } else {
        window.alert("ERROR: Word not found");
    }
    console.log(currWords);
}

// removeWord("by");
// addWord("by");

function testCase(){
    saveWords(window.blockedWords);
    getWords();
    console.log("we got here i guess");
}


