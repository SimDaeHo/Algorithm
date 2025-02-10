function solution(numbers) {
    numbers.sort((a, b) => a - b); 
    
    let len = numbers.length;
    let max1 = numbers[len - 1] * numbers[len - 2]; 
    let max2 = numbers[0] * numbers[1]; 
    
    return Math.max(max1, max2);
}
