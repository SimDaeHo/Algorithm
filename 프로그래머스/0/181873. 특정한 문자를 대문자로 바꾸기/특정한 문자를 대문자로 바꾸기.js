function solution(my_string, alp) {
  let stringArray = Array.from(my_string);

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === alp) {
      stringArray[i] = stringArray[i].toUpperCase();
    }
  }

  return stringArray.join('');
}