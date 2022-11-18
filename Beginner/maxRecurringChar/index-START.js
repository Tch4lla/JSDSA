/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {

    
    //initialize a map as an object
    let charMap = {}
    //initialize a variable that contains the value of the character that appears the most 

    let maxCharValue = 0

    //initialize a variable that contains the character with the max value
    let maxChar = ''

    //iterate over the text.

    for(let char of text){
        //if char is in the map already, increase the value by 1
        if(charMap.hasOwnProperty(char)){
            charMap[char]++
        //else, add the char to the map and set the value to 1
        }else{
            charMap[char] = 1
        }
    }

    for (let char in charMap){
        if(charMap[char] > maxCharValue){
            maxCharValue = charMap[char]
            maxChar = char
        }
    }
    return maxChar

}






module.exports = maxRecurringChar;