function solution(num_list) {
  const length = num_list.length;
  
  if (length === 0) {
    return [];
  }
  
  const lastElement = num_list[length - 1];
  const prevElement = num_list[length - 2];
  
  if (lastElement > prevElement) {
    return num_list.concat(lastElement - prevElement);
  } else {
    return num_list.concat(lastElement * 2);
  }
}