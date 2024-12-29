import { test, expect } from "vitest";
import {
  parseData,
  listIndexes,
  extractNumber,
  textTween,
  validateNumberPair,
  listNumberPairs,
} from "../../src/Day3/day3.js";
import exp from "constants";

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

// listIndexes
// a function that finds the index of all text string matches and returns the list of indexes

test("a should return 0 when search term is a", () => {
  expect(listIndexes("a", "a")).toStrictEqual([0]);
});

test("aba should return 0 2 when search term is a", () => {
  expect(listIndexes("aba", "a")).toStrictEqual([0, 2]);
});

test("abc should return 1 if search term is bc", () => {
  expect(listIndexes("abc", "bc")).toStrictEqual([1]);
});

//extractNumber
// starts at index 0 and extracts the number regardless of length
// assumes the number should always start at the beginning of the string
// returns the number or NaN

test("1 should return 1", () => {
  expect(extractNumber("1")).toBe(1);
});

test("1a should return 1", () => {
  expect(extractNumber("1a")).toBe(1);
});

test("12 should return 12", () => {
  expect(extractNumber("12")).toBe(12);
});

test("12a should retrun 12", () => {
  expect(extractNumber("12a")).toBe(12);
});

test("a1 should return NaN", () => {
  expect(extractNumber("a1")).toBe(NaN);
});

// textTween
// returns the text between first two specified characters
// if any one of the characters does not exist return undefined

test("abc should return b given a and c", () => {
  expect(textTween("abc", "a", "c")).toBe("b");
});

test("ab should return an empty string given a and b", () => {
  expect(textTween("ab", "a", "b")).toBe("");
});

test("ab should return undefined given a and c", () => {
  expect(textTween("ab", "a", "c")).toBe(undefined);
});

test("ab should return undefined given d and b", () => {
  expect(textTween("ab", "d", "b")).toBe(undefined);
});

// validateNumberPair
// takes a string and checks that the string is composed of two numbers seperated by a comma
// if true returns a pair array of the two numbers
// if false returns undefined

test("1,1 should return [1, 1]", () => {
  expect(validateNumberPair("1,1")).toStrictEqual([1, 1]);
});

test("a should return undefined", () => {
  expect(validateNumberPair("a")).toBe(undefined);
});

test("1,a should return undefined", () => {
  expect(validateNumberPair("1,a")).toBe(undefined);
});

test("a,1 should return undefined", () => {
  expect(validateNumberPair("a,1")).toBe(undefined);
});

// listNumberPairs
// should parse a string of data and return all the valid number pairs in an array
// assume that the string will contain one valid pair at most or no valid pairs
// return undefined if there are no valid pairs
test("mul(721,815) should return [[721, 815]]", () => {
  expect(listNumberPairs("mul(721,815)")).toStrictEqual([[721, 815]]);
});

test("mul(721,815 should return []", () => {
  expect(listNumberPairs("amul(721,815")).toStrictEqual([]);
});

test("mul(721,a) should return []", () => {
  expect(listNumberPairs("mul(721,a)")).toStrictEqual([]);
});

test("mul(721,815)mul(721,815) should return [[721, 815], [721, 815]]", () => {
  expect(listNumberPairs("mul(721,815)mul(721,815)")).toStrictEqual([
    [721, 815],
    [721, 815],
  ]);
});

test("mul(721,815)mul(721,a) should return [[721, 815]]", () => {
  expect(listNumberPairs("mul(721,815)mul(721,a)")).toStrictEqual([[721, 815]]);
});
