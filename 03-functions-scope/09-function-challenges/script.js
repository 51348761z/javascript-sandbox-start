// Challenge 1
const getCelsius = (fahrenheit) => Math.round((fahrenheit - 32) * 5) / 9;
console.log(`The temperature is ${getCelsius(32)} \xB0C`);

// Challenge 2
const minMax = (nums) => {
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  return {
    min,
    max,
  };
};
console.log(minMax([1, 3, 4, 10, 5]));

((length, width) => {
  console.log(
    `The area of a rectangle with a length of ${length} and a width of ${width} is ${
      length * width
    }`
  );
})(10, 4);
