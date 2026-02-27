const today = new Date();
console.log(today);
console.log(today.toDateString());
const localdate = new Date();
console.log(localdate.toLocaleString("en-US"));
const todaysDate = new Date(2023, 0, 1);

todaysDate.setDate(2);
todaysDate.setMonth(2);
console.log(todaysDate.toLocaleString());
console.log(Date.now());
