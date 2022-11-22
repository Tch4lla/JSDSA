/* CHALLENGE
Given an integer, return an integer that is the reverse 
ordering of that which was received. E.g
    reverseInteger(-123) // should return -321
*/

//reverse a string function 
function reverseString(str){
    return [...str].reduce((acc, curr) => curr + acc, '')
}

function reverseInteger(num){
    let reversedNumber = parseInt(reverseString(num.toString()))

    return reversedNumber * Math.sign(num)
}


module.exports = reverseInteger;
