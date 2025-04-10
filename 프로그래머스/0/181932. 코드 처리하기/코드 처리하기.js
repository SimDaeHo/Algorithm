function solution(code) {
    let ret = '';
    let mode = 0;

    for (let i = 0; i < code.length; i++) {
        if (code[i] === '1') {
            mode = 1 - mode; // mode 토글 (0 -> 1, 1 -> 0)
        } else {
            if (mode === 0 && i % 2 === 0) {
                ret += code[i];
            } else if (mode === 1 && i % 2 === 1) {
                ret += code[i];
            }
        }
    }

    return ret === '' ? "EMPTY" : ret;
}

