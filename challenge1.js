// import the file
const { resolveObjectURL } = require("buffer");
const fs = require("fs");
fs.readFile("Day1/challengeOneCodes.txt", "utf-8", (err, data) => {
  const rawData = data.split("\n");

  const left = [];
  const right = [];
  let results = 0;
  // parse the file one line at a time
  for (let pair of rawData) {
    // split the line on the space between the numbers
    const num1 = Number(pair.slice(0, 5));
    const num2 = Number(pair.slice(pair.length - 5, pair.length));
    left.push(num1);
    right.push(num2);
  }
  left.sort((a, b) => {
    return a - b;
  });
  right.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < left.length; i++) {
    // get the absolute difference between the numbers and add to the final result
    results += Math.abs(left[i] - right[i]);
  }
  // display the answer
  console.log(results);
});
