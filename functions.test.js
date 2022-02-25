import {
  getIndividualMorse as translate,
  stringToArray,
  cleanEnglishArray,
  arrayToString,
  morseStringToArray,
  translateStringToMorse,
  translateMorseToString,
  cleanMorseArray
} from "./functions.js";
import { expect, it, describe } from "@jest/globals";

//////// English To Morse


describe("should translate an alphabetic to morse", () => {
  it("a should translate to .-", () => {
    const result = translate("a", true);
    expect(result).toBe(".-");
  });
  it("A should translate to .-", () => {
    const result = translate("A", true);
    expect(result).toBe(".-");
  });
});

describe("should translate a numeric to morse", () => {
  it("1 should translate to .----", () => {
    const result = translate("1", true);
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
    const result = cleanEnglishArray(["I", "$", "a", "@", "m", "%", "2", "3"]);
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


///////// Morse to English
describe("should translate a morse to an alphabetic", () => {
  it("a should translate to .-", () => {
    const result = translate(".-", false);
    expect(result).toBe("a");
  });
});

describe("should translate a morse to a numeric", () => {
  it(".---- should translate to 1", () => {
    const result = translate(".----", false);
    expect(result).toBe("1");
  });
});

describe("should split a morse string to an array", () => {
  it('".- - ----. .- --"should become [".-","-","----.",".-","--"]', () => {
    const result = morseStringToArray(".- - ----. .- --");
    expect(result).toStrictEqual([".-","-","----.",".-","--"]);
  });
});

describe("should translate a morse string to an english string", () => {
  it('should translate ".-" to "a', () => {
    const result = translateMorseToString(".-");
    expect(result).toBe("a");
  });
  it('should translate "----." to "9', () => {
    const result = translateMorseToString("----.");
    expect(result).toBe("9");
  });
  
  it('should translate ".- - ----. .- --" to "at9am" ', () => {
    const result = translateStringToMorse(".- - ----. .- --");
    expect(result).toBe("at9am");
  });
})

describe("should not process non-dots/dashes/spaces", () => {
  it('should return undefined if no dots or dashes', () => {
    const result = translateMorseToString("this isnt morse");
    expect(result).toBeUndefined();
  });
})
