function solution(a, b) {
    let ab = Number(`${a}${b}`);
    let ba = Number(`${b}${a}`);
    return Math.max(ab, ba);
}

