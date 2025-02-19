function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const diff1 = Math.abs(a - n);
        const diff2 = Math.abs(b - n);

        if (diff1 === diff2) {
            return b - a;
        }

        return diff1 - diff2;
    });
}

