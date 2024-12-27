"use strict";
import { readFile } from "fs/promises";

export const isLinear = function (arrNum) {
  return (
    arrNum.every((curr, index) => {
      return index === 0 || curr < arrNum[index - 1];
    }) ||
    arrNum.every((curr, index) => {
      return index === 0 || curr > arrNum[index - 1];
    })
  );
};

export const isSafeRateChange = function (arrNum) {
  return arrNum.every((curr, index) => {
    return (
      index === 0 ||
      (Math.abs(curr - arrNum[index - 1]) <= 3 &&
        Math.abs(curr - arrNum[index - 1]) > 0)
    );
  });
};

export const isValidReport = function (numArr) {
  if (isLinear(numArr) && isSafeRateChange(numArr)) {
    return numArr;
  } else {
    for (let i = 0; i < numArr.length; i++) {
      const firstHalf = numArr.slice(0, i);
      const secondHalf = numArr.slice(i + 1, numArr.length);
      const newArr = [...firstHalf, ...secondHalf];
      if (isLinear(newArr) && isSafeRateChange(newArr)) {
        return true;
      }
    }
  }
};

export const convStrToNumArr = function (str) {
  return str.split(" ").map((val) => Number(val));
};

const countSafeReports = async function (filepath) {
  const data = (await readFile(filepath, "utf-8")).split("\n");
  let count = 0;

  for (const row of data) {
    const reportStatus = isValidReport(convStrToNumArr(row));
    if (reportStatus) {
      count++;
    }
  }

  return count;
};

countSafeReports("src\\Day2\\reports.txt").then((value) =>
  console.log("The answer is ", value)
);
