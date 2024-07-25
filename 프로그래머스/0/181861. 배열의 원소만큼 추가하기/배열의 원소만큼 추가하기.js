function solution(arr) {
  const X = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    for (let j = 0; j < num; j++) {
      X.push(num);
    }
  }

  return X;
}