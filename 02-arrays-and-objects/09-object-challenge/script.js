// step 1:
const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];
// console.log(library);

// step 2:
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
// console.log(library);

// step 3:
const { title: firstBook } = library[0];
// console.log(firstBook);

const str = JSON.stringify(library);
// console.log(str);
