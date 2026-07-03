# Day 04: Decode Santa pin
## Instructions
The elves have found the encrypted code that protects the door to Santa’s workshop. The PIN has 4 digits, and it is hidden inside blocks like these:  

[1++][2-][3+][<]

Write a function that deciphers the PIN from the code.

The code is made up of blocks between brackets [...] and each block generates one digit of the PIN.

A normal block has the form [nOP...], where n is a number (0-9) and after it there can be a list of (optional) operations.

The operations are applied in order to the number and are:
1. + adds 1
2. - subtracts 1

The result is always a digit (mod 10 arithmetic), for example 9 + 1 → 0 and 0 - 1 → 9.

There is also the special block [<], which repeats the digit from the previous block.

If in the end there are fewer than 4 digits, you must return null.

**Level:** MEDIUM
## Examples
```
decodeSantaPin('[1++][2-][3+][<]')
// "3144"

decodeSantaPin('[9+][0-][4][<]')
// "0944"

decodeSantaPin('[1+][2-]')
// null (only 2 digits)
```
## Solutions
```
function decodeSantaPin(code) {
  const digits = [];
  const blocks = code.slice(1, -1).split('][');
  
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    
    if (block === '<') {
      if (i === 0) return null;
      digits.push(digits[digits.length - 1]);
      continue;
    }
    
    let digit = +block[0];
    for (let j = 1; j < block.length; j++) {
      if (block[j] === '+') digit++;
      else if (block[j] === '-') digit--;
    }
    
    digits.push((digit + 10) % 10);
  }
  
  return digits.length === 4 ? digits.join('') : null;
}
```
**Score:** 5 star