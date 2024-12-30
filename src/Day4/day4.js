import { fs } from "fs/promises";
import { comma } from "postcss/lib/list";

export const findXmas = function (str) {
  const searchXmas = /XMAS/g;
  const forwardStr = str;
  const backwardStr = str.split("").reverse().join("");
  const forwardDiagArr = [];
  const backwardDiagArr = [];
  const strArr = str.split("\n");
  const strArrReverse = str
    .split("\n")
    .map((value) => value.split("").reverse().join(""));

  // create forward diagonal
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[i].length; j++) {
      if (forwardDiagArr[i + j] === undefined) {
        forwardDiagArr.push([]);
      }
      forwardDiagArr[i + j] = strArr[i][j] + forwardDiagArr[i + j];
    }
  }
  const forwardDiag = forwardDiagArr.join("\n");

  // create the backward diagonal
  for (let i = 0; i < strArrReverse.length; i++) {
    for (let j = 0; j < strArrReverse[i].length; j++) {
      if (backwardDiagArr[i + j] === undefined) {
        backwardDiagArr.push([]);
      }

      backwardDiagArr[i + j] = backwardDiagArr[i + j] + strArrReverse[i][j];
    }
  }
  const backwardDiag = backwardDiagArr.join("\n");
  console.log(backwardDiag);

  let count = 0;
  count += (forwardStr.match(searchXmas) || []).length;
  count += (backwardStr.match(searchXmas) || []).length;
  count += (forwardDiag.match(searchXmas) || []).length;
  count += (backwardDiag.match(searchXmas) || []).length;

  // console.log(forwardStr);
  // console.log(backwardStr);
  return count;
};
