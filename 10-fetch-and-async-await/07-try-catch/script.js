// try {
//   console.log(x);
// } catch (error) {
//   console.log(error);
// }

function double(number) {
  if (isNaN(number)) {
    throw new Error(number + " is not a number");
  }
  return number * 2;
}

try {
  double(NaN);
} catch (error) {
  console.log(error);
}
