function solution(array) {
    const max = Math.max(...array); // 배열에서 가장 큰 수를 찾음
    const index = array.indexOf(max); // 가장 큰 수의 인덱스를 찾음
    return [max, index]; // 결과를 배열로 반환
}