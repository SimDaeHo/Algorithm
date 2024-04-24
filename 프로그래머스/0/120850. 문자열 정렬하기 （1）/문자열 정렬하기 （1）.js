function solution(my_string) {
    const num = my_string.match(/\d/g).map(Number);
    
    const sortNum = num.sort((a,b) => a-b)
    
    return sortNum
}