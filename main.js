import {
    translateStringToMorse,
  } from "./functions.js";

// DOM Elements
const translateToMorseBtn = document.querySelector(".translator__translate-english")
const englishText = document.querySelector(".translator__english-text");
const morseText = document.querySelector(".translator__morse-text");

// Functions
const dealWithTranslate = () => {
    morseText.value = translateStringToMorse(englishText.value)
}

// Logic
translateToMorseBtn.addEventListener("click", dealWithTranslate)