export const getIndividualMorse = (input, toEnglish) => {
  const morseLettersObj = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
  };
  return toEnglish
    ? morseLettersObj[input.toLowerCase()]
    : Object.keys(morseLettersObj).find((key) => morseLettersObj[key] == input);
};

export const stringToArray = (inputString) => {
  return inputString.split("");
};

export const cleanEnglishArray = (unfilteredArray) => {
  const filteredArray = unfilteredArray.filter((value) =>
    value.match(/^[0-9a-zA-Z]+$/)
  );
  return filteredArray;
};

export const arrayToString = (inputArray) => {
  return inputArray.join(" ");
};

export const translateStringToMorse = (inputString) => {
  if (
    inputString.length === 0 ||
    (inputString.length === 1 && !inputString.match(/^[0-9a-zA-Z]+$/))
  ) {
    return;
  } else if (inputString.length === 1) {
    return getIndividualMorse(inputString, true);
  }
  const unfilteredArray = stringToArray(inputString);
  const filteredArray = cleanEnglishArray(unfilteredArray);
  const morseArray = filteredArray.map((value) => {
    return getIndividualMorse(value, true);
  });
  return arrayToString(morseArray);
};

export const morseStringToArray = (inputMorseString) => {
  // console.log(inputMorseString.split(" "))
  return inputMorseString.split(" ");
};

const cleanedMorseStringArr = (stringArr) => {
  const cleanedStringArr = stringArr.filter((value) => {
    if (value === "." || value === "-" || value === " ") {
      return value;
    }
  });
  return cleanedStringArr
};

const cleanMorseArray = (unfilteredArray) => {
    const subfilteredArray = unfilteredArray.map(element => {
        const splitElement = element.split("")
        const cleanedSplitElement = cleanedMorseStringArr(splitElement)
        return cleanedSplitElement.join("")
    })
    const filteredArray = subfilteredArray.filter(element => {
        if(element) {
             return element
            }
        })
        // console.log(filteredArray)
  return filteredArray;
};

export const translateMorseToString = (inputMorse) => {
  const trimmedMorse = inputMorse.trim();
  if (
    inputMorse.length === 0 
    ||
    (!inputMorse.match(/[.]|[-]/))
  ) {
    return;
  }
  const unfilteredArray = morseStringToArray(inputMorse);
  const filteredArray = cleanMorseArray(unfilteredArray)
  const englishArray = filteredArray.map((value) => {
    // console.log(value)
    // console.log(getIndividualMorse(trimmedMorse, false))
    return getIndividualMorse(trimmedMorse, false);
  });
  console.log(englishArray)
  return arrayToString(englishArray);
};
