function solution(numbers) {
    let sum = 0
    for(i = 0; i < numbers.length; i++) {
        sum += numbers[i] 
    }
    console.log(sum)
    return sum / numbers.length
}