function solution(arr) {
  return arr.map((num) => {
    if (num >= 50 && num % 2 === 0) {
      return num / 2; // 50 이상의 짝수는 2로 나눔
    } else if (num < 50 && num % 2 !== 0) {
      return num * 2; // 50 미만의 홀수는 2를 곱함
    } else {
      return num; // 나머지는 그대로 반환
    }
  });
}