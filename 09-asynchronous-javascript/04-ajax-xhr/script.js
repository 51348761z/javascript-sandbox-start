const xhr = new XMLHttpRequest();

// xhr.open("GET", "./movies.json");
xhr.open("GET", "https://api.github.com/users/51348761z/repos");

// readyState has 5 posible values:
// 0: UNSENT - Client has been created. open() not called yet.
// 1: OPENED - open() has been called.
// 2: HEADERS_RECEIVED - send() has been called, and headers and status are available.
// 3: LOADING - Downloading; responseText holds partial data.
// 4: DONE - The operation is complete.
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);
    data.forEach((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
      document.querySelector("#results").appendChild(li);
    });
  }
};

xhr.send();
