function solution(myString, pat) {
  const lowerCaseMyString = myString.toLowerCase();
  const lowerCasePat = pat.toLowerCase();

  if (lowerCaseMyString.includes(lowerCasePat)) {
    return 1;
  } else {
    return 0;
  }
}