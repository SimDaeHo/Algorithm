function solution(s) {
    const tokens = s.split(' ');
    let result = 0;
    let prevNum = 0;
    for (let i =0; i < tokens.length; i++) {
        const token = tokens[i]
        if (token === 'Z') {
            result -= prevNum;
        } else {
            prevNum = parseInt(token);
            result += prevNum
        }
    }
    return result
}
