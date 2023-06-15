function solution(str_list, ex) {
    let tail = '';
  for (let i = 0; i < str_list.length; i++) {
    if (!str_list[i].includes(ex)) {
      tail += str_list[i];
    }
  }
  return tail;
}