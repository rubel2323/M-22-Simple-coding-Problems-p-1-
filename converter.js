function inchToFeet(inch) {
  const feet = parseInt(inch / 12);

  const remaining = inch % 12;

  return `So,the given inch will be ${feet} feet and ${remaining} inch`;
}
const givenValue = inchToFeet(13);
console.log(givenValue);

function mileToMeter(mileValue) {
  const value = mileValue * 1609.344;
  return value;
}
const givenMile = mileToMeter(255);
console.log("The given mile will be ", givenMile, "meter");
