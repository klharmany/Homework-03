//DOM elements
const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');
const clipboardEL = document.getElementById('clipboard');


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper, 
    number: getRandomNumber, 
    symbol: getRandomSymbol,
};

//Generate event listen
generateEL.addEventListener('click' , () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumbers = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEL.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

});

//Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    //1. Inital password variable 
    //2. Filter out unchecked types 
    //3. Loop over the length 
    //4. Call a generator function for each type 
    //5. Add the final pw to the pw variables and return 

    let generatePassword = '';

    const typesCount = lower + uppper + number + symbol;

    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter 
    (
        item => Object.values(item) [0]
    );

    if(typesCount === 0) {
        return '';

    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];

            generatePassword += randomFunc[funcName]();

        });
    }

}

//Generator functions - http://www.net-comber.com/charset.html

function getRandomLower () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol () {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols [Math.floor(Math.random() * symbols.length)];
}

