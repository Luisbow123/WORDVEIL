//Array for user's words to block
let arrayBlockedWords = [];
let blockedWordsCount;

//Accessing the elements:
const buttonClick = document.getElementById('getWord');
const userInput = document.getElementById('userInput');

//Logic to make an array of .trim and .split(',') user inputs
let newArrayBlockedWords = (userInput.trim()).split(',');

//This method gets rid of the dupes:
buttonClick.onclick = function(){

//If newWord stays true throughout function, the function runs (if false, duplicate detected/while loop exited)
let newWord = true;
while (newWord == true){

//2D array that takes every element (0 --> length) and compares it to entire array one by one for dupes
  for (let n = 0; n<=newArrayBlockedWords.length; n++){

      for (let p =0; p<=newArrayBlockedWords.length; p++){

        if (p!=n){  //This runs only when the same element doesn't check itself

          if (newArrayBlockedWords[n].localeCompare(newArrayBlockedWords[p], { sensitivity: 'base' }) == true ){    //Checks if value is duplicated here (Treats upper/lowercase same)

              alert("Duplicate word detected, please fix this!");   //Alerts user of dupe word then exits while loop
              newWord = false;

          }

        }

      }

  }

  newArrayBlockedWords = arrayBlockedWords;   // Entire word list separated by (',') added to array of blocked words successfully
  newWord = false;

}
}

