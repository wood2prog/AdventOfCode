import { expect, expectTypeOf, test } from "vitest";
import {
  isLinear,
  isSafeRateChange,
  convStrToNumArr,
  removeFirstAnomoly,
} from "./day2.js";

// isLinear
test(" 1, 1 should return false", () => {
  expect(isLinear([1, 1])).toBe(false);
});

test("1, 2 should return true", () => {
  expect(isLinear([1, 2])).toBe(true);
});

test("2, 1 should return true", () => {
  expect(isLinear([2, 1])).toBe(true);
});

test("1, 2, 1 should return false", () => {
  expect(isLinear([1, 2, 1])).toBe(false);
});

test("2, 1, 2 should return false", () => {
  expect(isLinear([2, 1, 2])).toBe(false);
});

test("2 3 4 3 5 6 should return 2 3 4 5 6", () => {
  expect(isLinear([2, 3, 4, 3, 5, 6])).toBe(false);
});
// isSafeRateChange

test("1, 2 should return true", () => {
  expect(isSafeRateChange([1, 2])).toBe(true);
});

test("1, 5 should return false", () => {
  expect(isSafeRateChange([1, 5])).toBe(false);
});

test("5, 1 should return false", () => {
  expect(isSafeRateChange([5, 1])).toBe(false);
});

test("1, 2, 6 should return false", () => {
  expect(isSafeRateChange([1, 2, 6])).toBe(false);
});

// convStrToNumArr
test("1 should return [1]", () => {
  expect(convStrToNumArr("1")).toStrictEqual([1]);
});

test("1 2 should return [1, 2]", () => {
  expect(convStrToNumArr("1 2")).toStrictEqual([1, 2]);
});

test("1 2 3 should return [1, 2, 3]", () => {
  expect(convStrToNumArr("1 2 3")).toStrictEqual([1, 2, 3]);
});
<<<<<<< HEAD
=======

// removeFirstAnomoly

test("1 3 2 4 should return 1 2 4", () => {
  expect(removeFirstAnomoly([1, 3, 2, 4])).toStrictEqual([1, 2, 4]);
});

test("3 1 2 1 should return 3 2 1", () => {
  expect(removeFirstAnomoly([3, 1, 2, 1])).toStrictEqual([3, 2, 1]);
});

test("3 4 4 5 should return 3 4 5", () => {
  expect(removeFirstAnomoly([3, 4, 4, 5])).toStrictEqual([3, 4, 5]);
});

test("3 2 4 5 5 6 should return 3 4 5 5 6", () => {
  expect(removeFirstAnomoly([3, 2, 4, 5, 5, 6])).toStrictEqual([3, 4, 5, 5, 6]);
});

test("3 3 4 5 should return 3 4 5", () => {
  expect(removeFirstAnomoly([3, 3, 4, 5])).toStrictEqual([3, 4, 5]);
});

test("3 4 5 5 should return 3 4 5", () => {
  expect(removeFirstAnomoly([3, 4, 5, 5])).toStrictEqual([3, 4, 5]);
});
>>>>>>> 154ba88 (Clean up unused code in the tests and functions)
