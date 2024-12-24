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

//isSafeRateChange

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

test("1 2 1 3 should return false if ignoreFirstAnomoly set to true", () => {
  expect(isLinear([1, 2, 1, 3], true)).toBe(false);
});

test("1 2 4 3 4 should return true if ignoreFirstAnomoly set to true", () => {
  expect(isLinear([1, 2, 4, 3, 4], true)).toBe(true);
});

test("1 3 2 3 5 4 should return false if ignoreFirstAnomoly set to true", () => {
  expect(isLinear([1, 3, 2, 3, 5, 4], true)).toBe(false);
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

test("1 2 6 3 should return true when the ignoreFirstAnomoly flag is set to true", () => {
  expect(isSafeRateChange([1, 2, 6, 3], true)).toBe(true);
});

test("1 2 6 7 should return false when ignoreFirstAnomoly flag is set to true", () => {
  expect(isSafeRateChange([1, 2, 6, 7], true)).toBe(false);
});

// removeFirstAnomoly

test("1 2 6 7 should return 1 6 7", () => {
  expect(removeFirstAnomoly([1, 2, 6, 7])).toStrictEqual([1, 2, 7]);
});

test("1 2 2 7 should return 1 2 7", () => {
  expect(removeFirstAnomoly([1, 2, 2, 7])).toStrictEqual([1, 2, 7]);
});

test("1 3 2 7 should return 1 2 7", () => {
  expect(removeFirstAnomoly([1, 3, 2, 7])).toStrictEqual([1, 2, 7]);
});

test("3 2 4 7 should return 3 4 7", () => {
  expect(removeFirstAnomoly([3, 2, 4, 7])).toStrictEqual([3, 4, 7]);
});
