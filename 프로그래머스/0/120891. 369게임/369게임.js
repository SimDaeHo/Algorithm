function solution(order) {
    let answer = 0;

    // 1. [3, 6, 9] 포함된 정규식 변수 생성.
    let numberOfGame = /[369]/g;

    // 2. 숫자를 문자열로 변환하여 정규식을 이용해 포함된 숫자의 개수를 센 후 반환.
    let matchResult = ("" + order).match(numberOfGame);
    if (matchResult !== null) {
        answer = matchResult.length;
    }

    return answer;
}