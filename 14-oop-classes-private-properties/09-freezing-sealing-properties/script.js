// Sealing - Prevents properties from being added or removed. Can still be changed.

// Freezing - Prevents properties from being added, removed or changed

const rectObj = {
  name: "Rectangle 1",
  width: 10,
  height: 10,
};

Object.seal(rectObj);

let descriptors = Object.getOwnPropertyDescriptors(rectObj);
console.log(descriptors);

delete rectObj.name;
rectObj.color = "red";
rectObj.width = 20;
console.log(rectObj);

const CircleObj = {
  name: "Circle 1",
  radius: 30,
};

Object.freeze(CircleObj);
descriptors = Object.getOwnPropertyDescriptors(CircleObj);
console.log(descriptors);

CircleObj.color = "blue";
delete CircleObj.name;
CircleObj.radius = 50;
console.log(CircleObj);

console.log("rectObj is sealed?", Object.isSealed(rectObj));
console.log("rectObj is frozen?", Object.isFrozen(rectObj));

console.log("CircleObj is sealed?", Object.isSealed(CircleObj));
console.log("CircleObj is frozen?", Object.isFrozen(CircleObj));
