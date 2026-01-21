const getJoke = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("get", "https://api.chucknorris.io/jokes/random");
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      document.querySelector("#joke").textContent = data.value;
    }
  };
  xhr.send();
};

document.querySelector("#joke-btn").addEventListener("click", getJoke);
document.addEventListener("DOMContentLoaded", getJoke);
