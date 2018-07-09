/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
import englishToBrailleLiteralSet from './english-to-braille.js';

const englishBrailleMap = new Map(englishToBrailleLiteralSet);

function braileconvert() {
  let brailleString = '';
  const input = document.getElementById('sourceLangText').value;
  for (let i = 0; i < input.length; i += 1) {
    brailleString += englishBrailleMap.get(input[i]);
  }
  document.getElementById('targetLangText').innerHTML = brailleString;
}
document.getElementById('btnConvertEnglishToBraille').addEventListener('click', braileconvert);
