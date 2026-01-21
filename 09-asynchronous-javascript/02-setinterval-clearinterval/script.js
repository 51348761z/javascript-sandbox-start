// const intervalId = setInterval(myCallback, 1000, "hello");

// function myCallback(a) {
//   console.log(a, Date.now());
// }

let intervalId;

// function changeColor() {
//   if (document.body.style.backgroundColor !== "black") {
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//   } else {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//   }
// }

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

function startChange() {
  if (!intervalId) {
    intervalId = setInterval(changeRandomColor, 1000);
  }
}

function stopChange() {
  clearInterval(intervalId);
}

document.querySelector("#start").addEventListener("click", startChange);
document.querySelector("#stop").addEventListener("click", stopChange);
