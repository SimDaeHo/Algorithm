function solution(a, b) {
  if (a === b) return a;
  return a < b ? sum(a, b) : sum(b, a);

  function sum(a, b) {
    let answer = 0;
    for (let i = a; i <= b; i++) {
      answer += i;
    }
    return answer;
  }
}