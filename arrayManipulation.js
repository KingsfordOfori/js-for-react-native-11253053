function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
  }
  // Example usage:
  let inputArray = [1, 2, 3, 4, 5];
  let resultArray = processArray(inputArray);
  console.log(resultArray); // Output: [3, 4, 9, 16, 15]