// Return the first element from the given array that passes the test specified by the provided function. Both the array and function are passed into the function as arguments as shown below:

// arrayFilter(arr, func)

//need to pass each element in the array into the fucntion and return the first element that passes the test

function arrayFilter(arr,func){
    
    for(let element of arr){
        if(func(element)){
            return element
        }
    }
    return undefined
}

//using the find method to directly retrieve the first element that passes the specified test 

const arrayFindFilter = (arr, func) => arr.find(func)

module.exports = arrayFilter