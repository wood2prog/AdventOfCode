import { expect, test } from "vitest";
import {
  isLookForward,
  isLookBackward,
  isLookDown,
  isLookUp,
  isLookUpDiagForward,
  isLookDownDiagForward,
  isLookDownDiagBackward,
  isLookUpDiagBackward,
  lookAround,
} from "..\\..\\src\\Day4\\day4.js";

test("XMAS should equal true", () => {
  expect(
    isLookForward(
      "OOOOOOO\nOAOAOAO\nOOMMMOO\nOAMXMAS\nOOMMMOO\nOAOAOAO\nOOOOOOO",
      3,
      3
    )
  ).toBe(true);
});

test("O should return false", () => {
  expect(isLookForward("O", 0, 0)).toBe(false);
});

test("SAMX should equal true", () => {
  expect(
    isLookBackward(
      "OOOOOOO\nOAOAOAO\nOOMMMOO\nSAMXMAO\nOOMMMOO\nOAOAOAO\nOOOOOOO",
      3,
      3
    )
  ).toBe(true);
});

test("O should return false", () => {
  expect(isLookBackward("O", 0, 0)).toBe(false);
});

test("XMAS in the large array described should equal true", () => {
  expect(
    isLookDown(
      "OOOOOOO\nOAOAOAO\nOOMMMOO\nOAMXMAO\nOOMMMOO\nOAOAOAO\nOOOSOOO",
      3,
      3
    )
  ).toBe(true);
});

test("O should return false", () => {
  expect(isLookDown("O", 0, 0)).toBe(false);
});

test("O\\nO\\nO should return false", () => {
  expect(isLookDown("O\nO\nO", 0, 0)).toBe(false);
});

test("O\\nO\\nO\\nO should return false", () => {
  expect(isLookDown("O\nO\nO\nO", 0, 0)).toBe(false);
});

test("X\\nM\\nA\\nS should return true", () => {
  expect(isLookDown("X\nM\nA\nS", 0, 0)).toBe(true);
});

test("X\\nM\\nA\\nS should return false", () => {
  expect(isLookDown("X\nM\nA\nS", 0, 0)).toBe(true);
});

test("S\\nA\\nM\\nX should equal true", () => {
  expect(
    isLookUp(
      "OOOSOOO\nOAOAOAO\nOOMMMOO\nOAMXMAO\nOOMMMOO\nOAOAOAO\nOOOOOOO",
      3,
      3
    )
  ).toBe(true);
});

test("O should return false", () => {
  expect(isLookUp("O", 0, 0)).toBe(false);
});

test("O\\nO\\nO\\nO should return false", () => {
  expect(isLookUp("O\nO\nO\nO", 0, 0)).toBe(false);
});

test("O\\nO\\nO should return false", () => {
  expect(isLookUp("O\nO\nO", 0, 2)).toBe(false);
});

test("A diagonal forward and up XMAS should equal true", () => {
  expect(
    isLookUpDiagForward(
      "OOOOOOS\nOAOOOAO\nOOMOMOO\nOOOXOOO\nOOMOMOO\nOAOOOAO\nOOOOOOO",
      3,
      3
    )
  ).toBe(true);
});

test("O should return false", () => {
  expect(isLookUpDiagForward("O", 0, 0)).toBe(false);
});

test("OOO\\nOOO\\nOOO should return false", () => {
  expect(isLookUpDiagForward("OOO\nOOO\nOOO", 3, 0)).toBe(false);
});

test("A diagonal forward and down XMAS should true", () => {
  expect(
    isLookDownDiagForward(
      "OOOOOOO\nOAOOOAO\nOOMOMOO\nOOOXOOO\nOOMOMOO\nOAOOOAO\nOOOOOOS",
      3,
      3
    )
  ).toBe(true);
});

test("O should return false", () => {
  expect(isLookDownDiagForward("O", 0, 0)).toBe(false);
});

test("OOO\\nOOO\\nOOO should return false", () => {
  expect(isLookDownDiagForward("OOO\nOOO\nOOO", 0, 0)).toBe(false);
});

test("A diagonal backward and down XMAS should true", () => {
  expect(
    isLookDownDiagBackward(
      "OOOOOOO\nOAOOOAO\nOOMOMOO\nOOOXOOO\nOOMOMOO\nOAOOOAO\nSOOOOOO",
      3,
      3
    )
  ).toBe(true);
});

test("O should return false", () => {
  expect(isLookDownDiagBackward("O", 0, 0)).toBe(false);
});

test("OOO\\nOOO\\nOOO should return false", () => {
  expect(isLookDownDiagBackward("OOO\nOOO\nOOO", 0, 0)).toBe(false);
});

test("A diagonal backward and up XMAS should true", () => {
  expect(
    isLookUpDiagBackward(
      "SOOOOOO\nOAOOOAO\nOOMOMOO\nOOOXOOO\nOOMOMOO\nOAOOOAO\nOOOOOOO",
      3,
      3
    )
  ).toBe(true);
});

test("O should return false", () => {
  expect(isLookUpDiagBackward("O", 0, 0)).toBe(false);
});

test("OOO\\nOOO\\nOOO should return false", () => {
  expect(isLookUpDiagBackward("OOO\nOOO\nOOO", 2, 2)).toBe(false);
});

test("This array should return 8", () => {
  expect(
    lookAround(
      "SOOSOOS\nOAOAOAO\nOOMMMOO\nSAMXMAS\nOOMMMOO\nOAOAOAO\nSOOSOOS",
      3,
      3
    )
  ).toBe(8);
});
