/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



// function reverseString(text) {
//     // Code goes here
//     return [...text].reverse().join('')
// }

// function reverseString(text){
//     let result = ''

//     for (let i = text.length-1; i >= 0; i--){
//         result += text[i]
//     } 
//     return result
// }

function reverseString(text){
    return [...text].reduce((acc,char) => char + acc, '')
}

module.exports = reverseString