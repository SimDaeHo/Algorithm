function solution(sides) {
    // 배열을 오름차순으로 정리
    sides.sort((a,b) => a - b);
    
    // 가장 긴 변의 길이
    const longSide = sides[2];
    
    // 나머지 두 변의 길이 합
    const twoSide = sides[0] + sides[1];
    
    if (longSide < twoSide) {
        return 1;
    } else {
        return 2;
    }
}