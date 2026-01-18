// querySelectorAll()
const listItems = document.querySelectorAll(".item");
console.log(listItems[0].innerText);

// listItems[1].style.color = "red";

// listItems.forEach((item, index) => {
//   item.style.color = "blue";
//   if (index === 1) {
//     item.remove();
//   }
//   if (index === 0) {
//     item.innerHTML = `Oranges
//     <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;
//   }
// });

const listItem2 = document.getElementsByClassName("item");
// console.log(listItem2);

console.log(listItem2[2].innerText);

const listItemArray = Array.from(listItem2);
// console.log(listItemArray);

// listItem2.forEach((item) => console.log(item.innerText));
// listItemArray.forEach((item) => console.log(item.innerText));

const listItem3 = document.getElementsByTagName("li");
console.log(listItem3);
