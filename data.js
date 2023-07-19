// // array that gonna be used to store the words
var blockedWords = ["the", "cat", "bob", "dale"];

//Function that grabs cookie name, value and time to expire
function getCookie (name, value, timeAlive){
    const date = Date();
    date.setTime(date.getTime() + (timeAlive * 24 * 60 * 60 * 1000));
    let expiresIn = "Cookie expires in: " + date.toUTCString();
    document.cookie = `${name} = ${value}; ${expiresIn}; path =/`

}

//Function to set Cookie array
function setCookie (name){

    const cookieDecoded = decodeURIComponent(document.cookie);
    const arrayOfWords = cookieDecoded.split("; ");
    let result;

    arrayOfWords.forEach(element => {

        if (element.indexOf(name) == 0){

            result = element.substring(name.length +1);

        }

    });

}

//Function to delete cookie
function deleteCookie (){

    setCookie(name, null, null);

}





