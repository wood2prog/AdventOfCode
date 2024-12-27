import { test, expect } from "vitest";
import { parseData } from "../../src/Day3/day3.js";

test("mul(2,3) should return [2,3]", () => {
  expect(parseData("mul(2,3)")).toStrictEqual([2, 3]);
});
