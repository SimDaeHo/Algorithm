// function solution(dot) {
//     let result = 0
//     if(dot[0] >0 && dot[1] > 0) {
//         result = 1
//     }else if(dot[0] <0 || dot[1] > 0) {
//         result = 2
//     }else if(dot[0] <0 && dot[1] <0) {
//         result = 3
//     }else if(dot[0] >0 || dot[1] <0) {
//         result = 4
//     }
//         return result
    
// }

function solution(dot) {
  const [x, y] = dot;
  if (y > 0) return x > 0 ? 1 : 2;
  return x < 0 ? 3 : 4;
}