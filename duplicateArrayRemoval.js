function duplicatArray(numbers) {
  let arrayInitial = [];
  for (let number of numbers) {
    if (arrayInitial.includes(number) === false) {
      arrayInitial.push(number);
    }
  }
  return arrayInitial;
}

const arrayNumbers = [2, 4, 6, 8, 9, 0, 2, 3, 4, 5, 6, 7, 8];
const arrayNames = [
  "abul",
  "babul",
  "cabul",
  "mabul",
  "abul",
  "babul",
  "cabul",
  "dabul",
];
const uniqueArr = duplicatArray(arrayNumbers);
console.log(uniqueArr);
const uniqueNam = duplicatArray(arrayNames);
console.log(uniqueNam);
