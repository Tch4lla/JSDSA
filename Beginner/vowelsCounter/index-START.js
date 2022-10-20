/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

let vowels = ['a','e','i','o','u']

function vowelsCounter(text) {
    // Code goes here
    let counter = 0
    for (let letter of text.toLowerCase()){
        if(vowels.includes(letter)){
            counter++
        }
    } return counter
}

console.log(vowelsCounter("antidisestablishmentarianism"))



module.exports = vowelsCounter;
