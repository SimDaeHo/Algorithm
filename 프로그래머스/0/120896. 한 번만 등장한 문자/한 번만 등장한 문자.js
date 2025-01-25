function solution(s) {
  const itemCount = {};

  // 각 문자의 등장 횟수 세기
  for (const item of s) {
    itemCount[item] = (itemCount[item] || 0) + 1;
  }

  // 등장 횟수가 1인 문자 필터링
  const uniqueChars = Object.keys(itemCount).filter(item => itemCount[item] === 1);

  // 사전 순으로 정렬 후 문자열로 반환
  return uniqueChars.sort().join('');
}
