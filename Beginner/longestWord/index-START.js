/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



// function longestWord(text) {
//     // Code goes here
//     let wordArray = text.split(' ')
//     let maxLength = 0
//     let result = ''

//     for ( let i = 0; i < wordArray.length; i++){
//         if (wordArray[i].length > maxLength)
//         maxLength = wordAraay[i].length
//         result = wordArray[i]
//     }
//     return result
// }

//reduced function 
function longestWord( text ){
    var result = text.split(' ').reduce(( maxLengthWord, currentWord) => {
        if (currentWord.length > maxLengthWord.length){
            return currentWord
        }else{
            return maxLengthWord
        }
    }, "")
    return result
}

module.exports = longestWord