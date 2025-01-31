function solution(n) {
    let sum = 0;
    for (let hi of n.toString()) {
        sum += Number(hi);
    }
    return sum;
}