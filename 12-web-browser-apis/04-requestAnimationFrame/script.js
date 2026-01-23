let start;
let done = false;
const image = document.querySelector("img");

const step = (timestep) => {
  if (start === undefined) {
    start = timestep;
  }
  const elapsed = timestep - start;
  if (elapsed > 5000) {
    done = true;
  }

  if (done) {
    return;
  }

  image.style.transform = `translateX(${elapsed / 10}px) rotate(${elapsed / 10}deg)`;

  requestAnimationFrame(step);
};

requestAnimationFrame(step);
