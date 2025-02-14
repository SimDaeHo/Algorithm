function solution(sides) {
    const [a, b] = sides;
    const minSide = Math.min(a, b);
    const maxSide = Math.max(a, b);

    const case1 = maxSide - (maxSide - minSide);

    const case2 = a + b - maxSide - 1;

    return case1 + case2;
}
