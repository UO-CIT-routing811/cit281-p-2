/*
    CIT 281 Project 2
    Name: Teresa Tseng
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// return random letters
function getRandomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let lengthOfOutputString = getRandomInteger(5, 26);
    // get random letter using random() function
    const randomLetter = alphabet[getRandomInteger(5, 26)]
    // return random letter
    return randomLetter; 
}

// update for loop to call getRandomLetter()
for ( let i = 0; i < getRandomInteger(5, 26); i++ ) {
    console.log((i+1) + " letter : " + getRandomLetter());
}

// get random letter string between 10-20 
function getRandomString(minLength, maxLength) {
    let randomstring = "";
    let length = getRandomInteger(minLength, maxLength + 1)
    for (let i = 0; i < length; i++) {
        randomstring += getRandomLetter();
    
    }
    return randomstring;
}
console.log(getRandomString(10,20));

// get sorted random letter string with above mentioned function
function getSortedString(string) {return sort = string.split('').sort().join('');}
console.log(getSortedString(getRandomString(10,20)))