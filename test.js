"use strict";

const timedTest = function () {
  let result = "hi";
  setTimeout(() => {
    alert("hello");
  }, 1000);
  return result;
};

const test = async function () {
  setTimeout(() => {
    return "Hello World!";
  }, 1000);
};

console.log(
  test().then(function (something) {
    console.log(something);
  })
);

console.log(timedTest());
