const map = L.map("map").setView([0, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition((pos) => {
  const latitude = pos.coords.latitude;
  const longitude = pos.coords.longitude;

  marker.setLatLng([latitude, longitude]).update();
  map.setView([latitude, longitude], 15);

  marker.bindPopup("<strong>Hello World</strong> <br> This is my location");
});
