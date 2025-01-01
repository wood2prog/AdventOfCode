import { count } from "console";
import { read } from "fs";
import { readFile } from "fs/promises";

const toArray = function (arr) {
  const newArr = arr.split("\n").map((value) => {
    const strArr = [];
    for (const char of value) {
      strArr.push([char]);
    }
    return strArr;
  });

  return newArr;
};

export const isLookForward = function (arr, posX, posY) {
  const newArr = toArray(arr);
  let str = "";
  for (let i = 0; i < 4; i++) {
    str += newArr[posY][posX + i];
  }
  return str === "XMAS";
};

export const isLookBackward = function (arr, posX, posY) {
  const newArr = toArray(arr);
  let str = "";
  for (let i = 0; i < 4; i++) {
    str += newArr[posY][posX - i];
  }
  return str === "XMAS";
};

export const isLookDown = function (arr, posX, posY) {
  const newArr = toArray(arr);
  let str = "";
  if (arr.length >= 4 && posY < arr.length - 5) {
    for (let i = 0; i < 4; i++) {
      str += newArr[posY + i][posX];
    }
  } else {
    return false;
  }
  return str === "XMAS";
};

export const isLookUp = function (arr, posX, posY) {
  const newArr = toArray(arr);
  let str = "";
  if (arr.length > 1 && posY >= 3) {
    for (let i = 0; i < 4; i++) {
      str += newArr[posY - i][posX];
    }
  } else {
    return false;
  }
  return str === "XMAS";
};

export const isLookUpDiagForward = function (arr, posX, posY) {
  const newArr = toArray(arr);
  let str = "";
  if (arr.length >= 4 && posY >= 3) {
    for (let i = 0; i < 4; i++) {
      str += newArr[posY - i][posX + i];
    }
  } else {
    return false;
  }
  return str === "XMAS";
};

export const isLookDownDiagForward = function (arr, posX, posY) {
  const newArr = toArray(arr);
  let str = "";
  if (arr.length > 1) {
    for (let i = 0; i < 4; i++) {
      str += newArr[posY + i][posX + i];
    }
  } else {
    return false;
  }
  return str === "XMAS";
};

export const isLookDownDiagBackward = function (arr, posX, posY) {
  const newArr = toArray(arr);
  let str = "";
  if (arr.length > 1) {
    for (let i = 0; i < 4; i++) {
      str += newArr[posY + i][posX - i];
    }
  } else {
    return false;
  }
  return str === "XMAS";
};

export const isLookUpDiagBackward = function (arr, posX, posY) {
  const newArr = toArray(arr);
  let str = "";
  if (arr.length >= 4 && posY >= 3) {
    for (let i = 0; i < 4; i++) {
      str += newArr[posY - i][posX - i];
    }
  } else {
    return false;
  }
  return str === "XMAS";
};

export const lookAround = function (arr, posX, posY) {
  let count = 0;
  if (isLookForward(arr, posX, posY)) {
    count += 1;
  }

  if (isLookBackward(arr, posX, posY)) {
    count += 1;
  }

  if (isLookDown(arr, posX, posY)) {
    count += 1;
  }

  if (isLookUp(arr, posX, posY)) {
    count += 1;
  }

  if (isLookUpDiagForward(arr, posX, posY)) {
    count += 1;
  }

  if (isLookDownDiagForward(arr, posX, posY)) {
    count += 1;
  }

  if (isLookDownDiagBackward(arr, posX, posY)) {
    count += 1;
  }

  if (isLookUpDiagBackward(arr, posX, posY)) {
    count += 1;
  }

  return count;
};

const countXMAS = async function (filepath) {
  const data = await readFile(filepath, "utf-8");
  let count = 0;

  const newArr = toArray(data);

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      count += lookAround(data, i, j);
    }
  }
  console.log(count);
};

// countXMAS("src\\Day4\\test.txt");
