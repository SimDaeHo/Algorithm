// function solution(numbers) {
   
// }


function solution(numbers) {
    numbers.sort((a,b)=>b-a);
    return numbers[0]*numbers[1];
}

// function solution(numbers) {
//   let mx1 = Math.max(...numbers) //numbers = [1,2,3,4,5] mx1 =5
//    numbers.splice(numbers.indexOf(mx1),1) //mx1의 인덱스부터 1개를 지운다 number =[1,2,3,4]
//   let mx2 = Math.max(...numbers) // mx2=4
//    return mx1 * mx2 // 5*4
// }


// function solution(numbers) {
//     var answer = 0;   

//     for(let i = 0; i < numbers.length ; i++){
//         if(answer < numbers[i] * numbers[i+1]){
//             answer = numbers[i] * numbers[i+1];
//         }
//     }

//     return answer;
// }
