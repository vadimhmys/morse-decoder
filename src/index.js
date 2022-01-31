const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function convertZeroOneInDotDash(sequence) {
    let arrayPairs = [];
    let result;

    for(let i = 0; i < sequence.length; i += 2) {
        arrayPairs.push(sequence.substr(i,2));
    }

    result = arrayPairs
        .filter(pair => (pair === '10' || pair === '11') ? true : false)
        .map( pair => (pair === '10') ? '.' : '-' );

    return result.join('');
}

function decode(expr) {
    let arraySubstrings = [];
    let arrayMorse;
    let arrayLetters;

    for(let i = 0; i < expr.length; i += 10) {
        arraySubstrings.push(expr.substr(i,10));
    }
    
    arrayMorse = arraySubstrings.map(group => {
        if(group === '**********') return ' ';

        return convertZeroOneInDotDash(group);
    });

    arrayLetters = arrayMorse.map(key => (key === ' ') ? key : MORSE_TABLE[key]);

    return arrayLetters.join('');
}

module.exports = {
    decode
}

