function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Error: Something went wrong");
        }
      }
    };

    setTimeout(
      () => {
        xhr.send();
      },
      Math.floor(Math.random() * 3000) + 1000,
    );
  });
}

// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => console.log(error));

const getAllData = async () => {
  const movies = await getData("movies.json");
  const actors = await getData("actors.json");
  const directors = await getData("directors.json");
  console.log(movies, actors, directors);
};

const getAllDataWithFetch = async () => {
  const movies = await fetch("movies.json").then((res) => res.json());
  const actors = await fetch("actors.json").then((res) => res.json());
  const directors = await fetch("directors.json").then((res) => res.json());
  console.log(movies, actors, directors);
};

const getAllDataWithPromiseAll = async () => {
  const [movies, actors, directors] = await Promise.all([
    fetch("movies.json").then((res) => res.json()),
    fetch("actors.json").then((res) => res.json()),
    fetch("directors.json").then((res) => res.json()),
  ]);
  console.log(movies, actors, directors);
};

getAllDataWithPromiseAll();
// getAllDataWithFetch();
// getAllData();
