import { expect, test } from "vitest";
import { findXmas } from "..\\..\\src\\Day4\\day4.js";

test("XMAS should return 1", () => {
  expect(findXmas("XMAS")).toBe(1);
});

test("XMASXMAS should return 2", () => {
  expect(findXmas("XMASXMAS")).toBe(2);
});

test("XMAS\\nXMAS should return 2", () => {
  expect(findXmas("XMAS\nXMAS")).toBe(2);
});

test("SAMX should return 1", () => {
  expect(findXmas("SAMX")).toBe(1);
});

test("XMAS\\nXMAS\\nXMAS\\nXMAS should return 6", () => {
  expect(findXmas("XMAS\nXMAS\nXMAS\nXMAS")).toBe(6);
});
