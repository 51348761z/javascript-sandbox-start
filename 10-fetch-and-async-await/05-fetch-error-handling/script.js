// fetch("https://tools-httpstatus.pickup-services.com/200")
//   .then((response) => response)
//   .then(() => console.log("success"));

// Test with response.ok
// fetch("https://tools-httpstatus.pickup-services.com/404")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Request Failed");
//     }
//     return response;
//   })
//   .then(() => console.log("success"))
//   .catch((error) => console.log(error));

// Check for specific code
fetch("https://tools-httpstatus.pickup-services.com/200")
  .then((response) => {
    if (response.status === 404) {
      throw new Error("Not Found");
    } else if (response.status === 500) {
      throw new Error("Server Error");
    } else if (response.status !== 200) {
      throw new Error("Request Failed");
    }
    return response;
  })
  .then(() => console.log("success"))
  .catch((error) => console.log(error));

// NOTE: Catch runs on a network error
// fetch("https://hello123.net")
//   .then((response) => response)
//   .then(() => console.log("success"))
//   .catch((error) => console.log(error));
