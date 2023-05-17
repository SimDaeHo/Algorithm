function solution(num_list) {
  const product = num_list.reduce((acc, num) => acc * num, 1);
  const sum = num_list.reduce((acc, num) => acc + num, 0);
  
  return product < Math.pow(sum, 2) ? 1 : 0;
}