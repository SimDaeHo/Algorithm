function solution(myString, pat) {
  const modifiedString = myString
    .split('')
    .map((char) => {
      if (char === 'A') {
        return 'B';
      } else if (char === 'B') {
        return 'A';
      }
      return char;
    })
    .join('');

  return modifiedString.includes(pat) ? 1 : 0;
}