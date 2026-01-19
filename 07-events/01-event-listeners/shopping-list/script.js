const clearBtn = document.querySelector("#clear");

function onClear() {
  const itemList = document.querySelector("ul");
  const items = itemList.querySelectorAll("li");
  // // resolution 1
  // // itemList.innerHTML = "";
  // // resolution 2
  // items.forEach((item) => item.remove());

  // resolution 3
  // const items = document.querySelectorAll("li");
  // items.forEach((item) => item.remove());

  // solution 4
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// JS Event Listener
// clearBtn.onclick = function () {
//   alert("Clear items");
// };
// clearBtn.onclick = function () {
//   // This will overwrite the previous onclick
//   console.log("Clear items");
// };

// addEventListener()
// clearBtn.addEventListener("click", () => alert("Clear items"));
// clearBtn.addEventListener("click", () => console.log("Clear items"));
clearBtn.addEventListener("click", onClear);
