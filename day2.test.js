import { expect, test } from "vitest";
import { isLinear, isSafeRateChange } from "./day2.js";

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
