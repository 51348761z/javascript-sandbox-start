const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = numbers.reduce(function (prev, curr) {
//   return prev + curr;
// }, 0);
// console.log(sum);

// const sum2 = numbers.reduce((prev, curr) => prev + curr, 0);
// console.log(sum);

// Using a for loop
// const sum3 = () => {
//   let acc = 0;
//   for (number of numbers) {
//     acc += number;
//   }
//   return acc;
// };
// console.log(sum3());

const cart = [
  {
    id: 1,
    product: "phone",
    price: 1000,
  },
  {
    id: 2,
    product: "laptop",
    price: 2000,
  },
  {
    id: 3,
    product: "tablet",
    price: 1500,
  },
];
const total = cart.reduce((acc, product) => acc + product.price, 0);
console.log(total);
