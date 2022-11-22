function rangeSum(arr) {
  let sum = []
  for( let i = arr[0]; i <= arr[1]; i++){
    sum.push(i)
  }
  return sum.reduce((acc,curr)=> acc + curr, 0) 
}

console.log(rangeSum([1,9]))

//using arithmetic progression formula S = n/2 (first term + last term)
//We derive the value of n as maximum limit - minimum limit + 1
function rangeSum(arr) {
  return ((arr[1] - arr[0] +1) * (arr[0] + arr[1])) / 2;
}
module.exports = rangeSum;
