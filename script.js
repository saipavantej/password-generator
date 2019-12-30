const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");
const form = document.getElementById("passwordGeneratoeForm");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeNumbersElement = document.getElementById("includeNumber");
const includeSymbolsElement = document.getElementById("includeSymbols");
const passwordDisplay = document.getElementById("passwordDisplay");
const Upper_Char_Codes = arrarFromLowToHigh(65, 90);
const Lower_Char_codes = arrarFromLowToHigh(97, 122);
const Number_char_codes = arrarFromLowToHigh(48, 57);
const Symbol_char_codes = arrarFromLowToHigh(33, 47).concat(arrarFromLowToHigh(58, 64)).concat(arrarFromLowToHigh(91, 96)).concat(arrarFromLowToHigh(123, 126));
characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);

form.addEventListener("submit", e => {
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
    passwordDisplay.innerText = password;
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCode = Lower_Char_codes;
    if (includeUppercase) {
        charCode = charCode.concat(Upper_Char_Codes);
    }
    if (includeNumbers) {
        charCode = charCode.concat(Number_char_codes);
    }
    if (includeSymbols) {
        charCode = charCode.concat(Symbol_char_codes);
    }
    const passwordCharacters = [];
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCode[Math.floor(Math.random() * charCode.length)];
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('');
}

function arrarFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountRange.value = value;
    characterAmountNumber.value = value;
}
