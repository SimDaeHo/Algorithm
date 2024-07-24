function solution(num_list) {
 
  let result = [];

  num_list.sort((a, b) => a - b);

  if (num_list.length >= 5) {
    for (let i = 5; i < num_list.length; i++) {
      result.push(num_list[i]);
    }
  }

  return result;
}
