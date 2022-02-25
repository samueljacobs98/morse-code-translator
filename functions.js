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

export const cleanArray = (unfilteredArray) => {
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
  const filteredArray = cleanArray(unfilteredArray);
  const morseArray = filteredArray.map((value) => {
    return getIndividualMorse(value, true);
  });
  return arrayToString(morseArray);
};

export const translateMorseToString = (inputMorse) => {
  //Trim the input
  // if trimmed input does not contain a space
  // get Individual English value
};
