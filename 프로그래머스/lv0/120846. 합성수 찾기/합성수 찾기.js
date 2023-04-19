const getIsCount = (i) => {
    let isCount = false
    for(let num = 2; num < i-1; num++) {
        if(i % num === 0) {
            isCount = true
        }
    }
    return isCount
}





function solution(n) {
    let answer = 0;
    for(let i = n; i >= 1; i--) {
        const isCount = getIsCount(i)
        if(isCount) {
            answer += 1
        }
    }
    return answer;
}