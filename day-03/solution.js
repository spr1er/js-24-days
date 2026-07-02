function drawGift(size, symbol) {
  if (size < 2) return '';

  const border = symbol.repeat(size);
  const middle = symbol + ' '.repeat(size - 2) + symbol;

  let gift = [border];

  for (let i = 0; i < size - 2; i++) {
    gift.push(middle);
  }
  gift.push(border);

  return gift.join('\n');
}