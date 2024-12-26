import { expect, expectTypeOf, test } from "vitest";
import {
  isLinear,
  isSafeRateChange,
  convStrToNumArr,
  removeFirstAnomoly,
} from "./day2.js";
import exp from "constants";
import { isArgumentsObject } from "util/types";

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

// removeFirstAnomoly

test("1 should return 1", () => {
  expect(removeFirstAnomoly([1])).toStrictEqual([1]);
});

test("1 1 should return 1", () => {
  expect(removeFirstAnomoly([1, 1])).toStrictEqual([1]);
});

test("1 2 should return 1 2", () => {
  expect(removeFirstAnomoly([1, 2])).toStrictEqual([1, 2]);
});

test("1 2 2 should return 1 2", () => {
  expect(removeFirstAnomoly([1, 2, 2])).toStrictEqual([1, 2]);
});

test("1 2 1 should return 1 2", () => {
  expect(removeFirstAnomoly([1, 2, 1])).toStrictEqual([1, 2]);
});

test("2 1 2 should return 2 1", () => {
  expect(removeFirstAnomoly([2, 1, 2])).toStrictEqual([2, 1]);
});

test("1 5 should return 1", () => {
  expect(removeFirstAnomoly([1, 5])).toStrictEqual([1]);
});
