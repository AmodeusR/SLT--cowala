const createFibonacciArray = num => {
  if (num < 1) return "The number needs to be equal or greater than 1";
 
  const fibonacciArray = [];
  switch(num) {
    case 1:
      fibonacciArray.push(0);
      break;
    
    case 2:
      fibonacciArray.push(0, 1);
      break;
    
    default:
      fibonacciArray.push(0, 1, 1);
  }

  
  for(let i = fibonacciArray.length; i < num; i++) {
    const invertedFibonacciArray = [...fibonacciArray].sort((a, b) => b - a);
    const [secondToLastNum, lastNum] = invertedFibonacciArray;

    fibonacciArray.push(secondToLastNum + lastNum);
  }
 
  return fibonacciArray;
}

/* TESTS */

let fibonacciArray = createFibonacciArray(0);

// Expected an empty array
console.log(fibonacciArray);

// Expected an array of 2 items
fibonacciArray = createFibonacciArray(2);
console.log(fibonacciArray);

// Expected an array of 8 items
fibonacciArray = createFibonacciArray(8);
console.log(fibonacciArray);

// Expected an array of 14 items
fibonacciArray = createFibonacciArray(14);
console.log(fibonacciArray);
