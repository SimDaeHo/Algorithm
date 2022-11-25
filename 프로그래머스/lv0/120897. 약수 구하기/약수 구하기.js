// function solution(n) {
//     arr = []
//     for(i=1; i<=n; i++){
//         if(n%i === 0){
//             arr.push(i)
//         }
//     }
//     return arr;
// }


function solution(n) {
  return Array.from({ length: n }, (_, i) => i + 1).filter(
    (el) => n % el === 0
  );
}