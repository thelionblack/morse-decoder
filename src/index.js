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
    let array = [];
    let result = '';
    let length =  expr.length / 10;
    for(let i = 0; i < length; i++) {
        if(expr.slice(0, 10) === '**********') {
            array.push('space');
        }else {
            array.push([expr.slice(0, 2), expr.slice(2, 4), expr.slice(4, 6), expr.slice(6, 8), expr.slice(8, 10)]);
        }
        expr = expr.slice(10);
    }
    array.forEach(elem => {
        let str = '';
        if(elem === 'space') {
            result += ' ';
        }else {
            elem.forEach(elem => {
                if(elem === '10') {
                    str += '.';
                }else if(elem === '11') {
                    str += '-';
                }
            });
            for (let key in MORSE_TABLE){
                if(key === str) {
                    result += MORSE_TABLE[key];
                    str = '';
                }
            }
        }
    });
    console.log(result)
    return result;
}

module.exports = {
    decode
}