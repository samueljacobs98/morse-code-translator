import {
    translateStringToMorse,
    translateMorseToString
  } from "./functions.js";

// DOM Elements
const translateToMorseBtn = document.querySelector(".translator__translate-english")
const translateToEnglishBtn = document.querySelector(".translator__translate-morse")
const englishText = document.querySelector(".translator__english-text");
const morseText = document.querySelector(".translator__morse-text");

// Functions
const dealWithTranslateToMorse = () => {
    morseText.value = translateStringToMorse(englishText.value)
}
const dealWithTranslateToEnglish = () => {
    englishText.value = translateMorseToString(morseText.value)
}

// Logic
translateToMorseBtn.addEventListener("click", dealWithTranslateToMorse)
translateToEnglishBtn.addEventListener("click", dealWithTranslateToEnglish)