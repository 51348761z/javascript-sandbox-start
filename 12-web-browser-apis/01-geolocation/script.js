// getCurrentPosition()
const curSucess = (pos) => {
  const coords = pos.coords;
  console.log(`Lattitude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`Accuracy: ${coords.accuracy} meters`);
};

const curError = (err) => {
  console.log(`Error: ${err.code} - ${err.message}`);
};

const options = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000, // Time to wait to stop trying to get location
  maximumAge: 0, // Do not use cached location
};

// navigator.geolocation.getCurrentPosition(curSucess, curError, options);

// watchPosition()
const target = {
  latitude: 23.133,
  longitude: 106.408,
};

// Compare coords with a tolerance to avoid strict floating point equality
const isClose = (a, b, tol = 0.0001) => Math.abs(a - b) <= tol;

const watchSucess = (pos) => {
  const coords = pos.coords;
  console.log(coords);

  if (
    isClose(target.latitude, coords.latitude, 0.001) &&
    isClose(target.longitude, coords.longitude, 0.001)
  ) {
    console.log("You have reached the target location!");
    navigator.geolocation.clearWatch(id); // Stop watching position
  }
};

const watchError = (err) => {
  console.log(`Error: ${err.code} - ${err.message}`);
};

const watchOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000, // Time to wait to stop trying to get location
  maximumAge: 0, // Do not use cached location
};

const id = navigator.geolocation.watchPosition(
  watchSucess,
  watchError,
  watchOptions,
);
