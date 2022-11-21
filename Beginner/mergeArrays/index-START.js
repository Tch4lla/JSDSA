/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

//spread all of the arrays in the parameters so that it is one single array
function mergeArrays(...arrays) {
    //initialize an empty array to store all of the array values 
    let jointArray = []

    //loop through all of the arrays
    //for each array, reassign jointArray to include all the joint array values and the array values 
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    //return a new set from the joint array values, eliminating all duplicates
    return [...new Set([...jointArray])]
}

//using reduce 
function mergedArraysReduce(...arrays){
    let joinedArrays = []

    arrays.forEach(array => {
        joinedArrays = [...joinedArrays, ...array]
    })

    const uniqueArray = joinedArrays.reduce((newArray, item) => {
        if(newArray.includes(item)){
            return newArray
        } else {
            return [...newArray, item]
        }
    }, [])

    return uniqueArray
}

module.exports = mergeArrays