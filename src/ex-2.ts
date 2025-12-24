function sumEvenNumbers(numbers: number[]): number {
  //Start Coding Here
  return numbers.reduce((acc , number) => number %2 === 0 ? acc + number : acc ,0)
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([11, 13, 15])); // 0
