/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// function chunkArray(array, size) {
//     let result = []
//     for (value of array){
//         let lastArray = result[result.length -1 ]
        
//         if(!lastArray || lastArray.length == size){
//             result.push([value])
//         } else{
//             lastArray.push(value)
//         }
//     }
//     return result
// }

function chunkArray(array,size){
    let copy = array
    let result = []
   

    while(copy.length > 0){
        result.push(copy.splice(0,size))
    }
    return result

}
console.log(chunkArray([1,2,3,4,5,6,7,8],2))

module.exports = chunkArray