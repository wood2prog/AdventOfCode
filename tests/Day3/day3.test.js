import { test, expect } from "vitest";
import { parseData } from "../../src/Day3/day3.js";

test("mul(2,3) should return [[2, 3]]", () => {
  expect(parseData("mul(2,3)")).toStrictEqual([[2, 3]]);
});

test("amul(1,2) should return [[1, 2]]", () => {
  expect(parseData("amul(1,2)")).toStrictEqual([[1, 2]]);
});

test("amul(1,2)a should return [[1, 2]]"),
  () => {
    expect(parseData("amul(1,2)a")).toStrictEqual([[1, 2]]);
  };

test("amul(1,2)stuffmul(3,4) should return [[1, 2], [3, 4]]", () => {
  expect(parseData("amul(1,2)stuffmul(3,4)")).toStrictEqual([
    [1, 2],
    [3, 4],
  ]);
});
