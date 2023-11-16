/* 
String Encode

You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 

If final result is not shorter (such as "bb" => "b2" ),
return the original string.
*/

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

// ! Bonus
const str4 = "bbcc";
const expected4 = "bbcc";

const str5 = "bc";
const expected5 = "bc";


function encodeStr(str) {
    if (!str) {
        return str;
    }

    let encoded = '';
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            encoded += str[i - 1] + (count === 1 ? '' : count);
            count = 1;
        }
    }

    return encoded.length < str.length ? encoded : str;
}

// Test cases
console.log(encodeStr(str1)); // "a4b2c1d3"
console.log(encodeStr(str2)); // ""
console.log(encodeStr(str3)); // "a"
console.log(encodeStr(str4)); // "bbcc"
console.log(encodeStr(str5)); // "bc"




