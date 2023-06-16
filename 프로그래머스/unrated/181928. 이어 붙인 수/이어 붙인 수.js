function solution(num_list) {
  let oddSum = "";  // 홀수를 이어 붙일 변수
  let evenSum = ""; // 짝수를 이어 붙일 변수

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      evenSum += num_list[i].toString();  // 짝수면 evenSum에 이어 붙임
    } else {
      oddSum += num_list[i].toString();   // 홀수면 oddSum에 이어 붙임
    }
  }

  const oddSumResult = oddSum === "" ? 0 : parseInt(oddSum);   // 홀수의 합을 정수로 변환
  const evenSumResult = evenSum === "" ? 0 : parseInt(evenSum); // 짝수의 합을 정수로 변환

  return oddSumResult + evenSumResult;  // 홀수와 짝수의 합을 반환
}