function solution(a, b) {
    let ab = Number(`${a}${b}`);
    let product = 2 * a * b;
    return Math.max(ab, product);
}


