//Array for user's words to block
let blockedWords = [];
let blockedWordsCount;

/*/ This logic will check if their input is a duplicate word, then add it, if not, ignore it:
      [Assuming (value = "string" checks for the same word using case sensitive stuff i think)] /*/
document.getElementById("getWord").onclick = function(){

//If newWord stays true throughout function, the function runs (if false, duplicate detected/while loop exited)
let newWord = true;
while (newWord == true){

  for (let n = 0; n<=blockedWords.length; n++){

    if (document.getElementById("userInput").value == blockedWords[n]) {

      alert ("Duplicate word detected");  //User is alerted of duplicate word (case sensitive i think)
      n = blockedWords.length + 2;  //I make n > blockedWords.length to jump out of forLoop
      newWord = false;


 }  else {

  if (n == blockedWords.length){


    blockedWords[blockedWordsCount] = document.getElementById("userInput").value;
    blockedWordsCount++;

    newWord = false;

  }
 }

}//forLoop loops here
}

alert(blockedWords.values());

}

document.getElementById("getWord").onclick = function(){
  let wordInputed = document.getElementById("userInput").value;
  console.log("Hello",wordInputed);
}

