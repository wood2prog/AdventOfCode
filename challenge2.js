"use strict";
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);

const countSafeReports = async function (filename) {
  // read the file and split the data on newline
  const data = (await readFileAsync(filename, "utf-8")).split("\n");

  // for each line
  // split it into an array of numbers
  // check that it is increasing or dropping
  // check that it is changing at a rate no more than 3 levels at a time
  // return the count quantity of safe reports
};
