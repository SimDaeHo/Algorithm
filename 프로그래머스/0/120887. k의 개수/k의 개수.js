function solution(i, j, k) {
    let count = 0;
    const kStr = k.toString();

    for (let num = i; num <= j; num++) {
        count += num.toString().split(kStr).length - 1;
    }

    return count;
}

