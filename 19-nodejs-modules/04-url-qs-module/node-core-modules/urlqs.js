const url = require("url");

const myUrl = new URL(
  "http://www.example.com:8080/path/name?param1=value1&param2=value2#section1",
);

console.log(myUrl);
const myUrl2 = url.format({
  protocol: "http",
  hostname: "www.example.com",
  port: "8080",
  pathname: "/path/name",
  search: "?param1=value1&param2=value2",
  hash: "#section1",
});
console.log(myUrl2);
