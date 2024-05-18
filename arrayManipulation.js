function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
  }
  // Example usage:
  let inputArray = [1, 2, 3, 4, 5];
  let resultArray = processArray(inputArray);
  console.log(resultArray); // Output: [3, 4, 9, 16, 15]

  // task 2
  function formatArrayStrings(stringArray, numberArray) {
    let formattedArray = [];
    for (let i = 0; i < stringArray.length; i++) {
      if (numberArray[i] % 2 === 0) {
        formattedArray.push(stringArray[i].toUpperCase());
      } else {
        formattedArray.push(stringArray[i].toLowerCase());
      }
    }
    return formattedArray;
  }