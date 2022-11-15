function solution(array, height) {
  const result =  array.filter(tall => tall > height).length
    return result
}

function solution(array, height) {
  let count = 0
  for(let i = 0; i < array.length; i++) {
      if(array[i] >height) {
          count ++
      }
  }
     return count
}

function solution(array, height) {
  let count = []
  for(let i = 0; i < array.length; i++) {
      if(array[i] >height) {
          count.push(i)
      }
  }
     return count.length
}

