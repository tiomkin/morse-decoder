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

function decode(expr) {
    // write your solution here
    // let startIndex;
    // let endIndex;
    // let character = expr.slice(startIndex, endIndex);
    let output = '';
    const dot = '.';
    const dash = '-';
    const zero = '00';
    const ten = '10';
    const eleven = '11';
    let startIndex, endIndex;

    for (let i = 0; i < expr.length; i = i + 10) {
        startIndex = i;
        endIndex = startIndex + 10;
        let character = expr.slice(startIndex, endIndex);
        if (character[0] == "*") {
            output += ' ';
        }
        else {
            let morseString = ''
            for (let i = 0; i < 10; i = i + 2) {
                let firstTwoChars = character.slice(i, i + 2);
                if (firstTwoChars == zero) {
                    continue;
                }
                else if (firstTwoChars == ten) {
                    morseString += dot;
                }
                else {
                    morseString += dash;
                }
            }
            output += MORSE_TABLE[morseString];
            morseString = '';
        }
    }
    
    return output;

}

module.exports = {
    decode
}