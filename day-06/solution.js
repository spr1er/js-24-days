function matchGloves(gloves) {
  const result = [];
  const leftFree = {};
  const rightFree = {};
  
  for (const glove of gloves) {
    const { hand, color } = glove;
    
    if(hand === 'L') {
      if (rightFree[color] > 0) {
        result.push(color);
        rightFree[color]--;
      } else {
        leftFree[color] = (leftFree[color] || 0) + 1;
      }
    } else {
      if (leftFree[color] > 0) {
        result.push(color);
        leftFree[color]--;
      } else {
        rightFree[color] = (rightFree[color] || 0) + 1;
      }
    }
  }
  return result;
}