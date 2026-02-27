function inchToFeet(inch) {
  const feet = parseInt(inch / 12);

  const remaining = inch % 12;

  return `So,the given inch will be ${feet} feet and ${remaining} inch`;
}
const givenValue = inchToFeet(13);
console.log(givenValue);

// console.log("So, The inch given will be in ", givenValue, "feet");

function mileToMeter(mileValue) {
  const value = mileValue * 1609.344;
  return value;
}
const givenMile = mileToMeter(255);
console.log("The given mile will be ", givenMile, "meter");
