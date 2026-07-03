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