import {
  getIndividualMorse,
  stringToArray,
  cleanArray,
  arrayToString,
  translateStringToMorse,
} from "./functions.js";
import { expect, it, describe } from "@jest/globals";

describe("should translate an alphabetic to morse", () => {
  it("a should translate to .-", () => {
    const result = getIndividualMorse("a");
    expect(result).toBe(".-");
  });
  it("A should translate to .-", () => {
    const result = getIndividualMorse("A");
    expect(result).toBe(".-");
  });
});

describe("should translate a numeric to morse", () => {
  it("1 should translate to .----", () => {
    const result = getIndividualMorse("1");
    expect(result).toBe(".----");
  });
});

describe("should split a string to an array", () => {
  it('at 9am should become ["a","t"," ","9","a","m"]', () => {
    const result = stringToArray("At 9am");
    expect(result).toStrictEqual(["A", "t", " ", "9", "a", "m"]);
  });
});

describe("should filter out any non-alphanumeric values", () => {
  it('["i","$","a","@","m","%","2","3"] should become ["i","a","m","2","3"]', () => {
    const result = cleanArray(["I", "$", "a", "@", "m", "%", "2", "3"]);
    expect(result).toStrictEqual(["I", "a", "m", "2", "3"]);
  });
});

describe("should join a array to a string", () => {
  it('[".----",".-",".--"] should become ".---- .- .--"', () => {
    const result = arrayToString([".----", ".-", ".--"]);
    expect(result).toBe(".---- .- .--");
  });
});

describe("should translate a string to morse", () => {
  it('should translate "a" to ".-"', () => {
    const result = translateStringToMorse("a");
    expect(result).toBe(".-");
  });
  it('should translate "A" to ".-"', () => {
    const result = translateStringToMorse("A");
    expect(result).toBe(".-");
  });
  it('should translate "9" to "----."', () => {
    const result = translateStringToMorse("9");
    expect(result).toBe("----.");
  });
  it('should translate "at 9am" to ".- - ----. .- --"', () => {
    const result = translateStringToMorse("at 9am");
    expect(result).toBe(".- - ----. .- --");
  });
});
