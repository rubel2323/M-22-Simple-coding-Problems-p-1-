function evenArray(arr) {
  const numberTotal = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      numberTotal.push(num);
    }
  }

  let sum = 0;
  for (let evenNumber of numberTotal) {
    sum += evenNumber;
  }
  let len = numberTotal.length;
  const avgEvenNum = sum / len;
  return `The total numbers are ${numberTotal},and summation is ${sum} total element of array is ${len} and their avg is ${avgEvenNum}`;
}
const arrNumbers = evenArray([3, 5, 7, 44, 66, 78, 89, 33]);
console.log(arrNumbers);
