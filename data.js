// array that gonna be used to store the words
var blockedWords = ["the", "cat"];

// function to save array to chrome
function saveWords(array){
    chrome.storage.local.set({ key1: array }).then(() => {
        console.log("Value is set");
    });
}

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
    currWords.push(word);
    saveWords(currWords);
}

// function to remove a word from the list stored in chrome
async function removeWord(word){
    console.log("started removing");
    let currWords = await getWords();
    
    let indexToRemove = currWords.indexOf(word);

    if (indexToRemove !== -1) {
        currWords.splice(indexToRemove, 1);
        console.log(currWords);
        saveWords(currWords); 
    } else {
        window.alert("could not find word");
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


