/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const strA = "object oriented programming";
const expectedA = "OOP";

// The 4 pillars of OOP
const strB = "abstraction polymorphism inheritance encapsulation";
const expectedB = "APIE";

const strC = "software development life cycle";
const expectedC = "SDLC";

//- Bonus: ignore extra spaces acronomize
// const strD = "  global   information tracker    ";
// const expectedD = "GIT";

function acronomize(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    let result = words.join(' ');

    return result;
}

let capitalizedString = acronomize(strA);
let capitalizedString1 = acronomize(strB);
let capitalizedString2 = acronomize(strC);
console.log(capitalizedString);
console.log(capitalizedString1);
console.log(capitalizedString2);
