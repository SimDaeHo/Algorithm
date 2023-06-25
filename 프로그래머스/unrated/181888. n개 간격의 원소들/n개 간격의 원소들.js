function solution(num_list, n) {
  let result = [];
  for (var i = 0; i < num_list.length; i += n) {
    result.push(num_list[i]);
  }
  return result;
}