function solution(array, height) {
  const result =  array.filter(tall => tall > height).length
    return result
}