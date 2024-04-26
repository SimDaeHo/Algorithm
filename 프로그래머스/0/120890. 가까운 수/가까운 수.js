function solution(array, n) {
    let near = array[0]; 
    let minDf = Math.abs(n - near);
    
    for (let i = 1; i < array.length; i++ ) {
        let diff = Math.abs(n - array[i]);
        if(diff < minDf || (diff === minDf && array[i] < near)) {
            minDf = diff;
            near = array[i]
        }
    }
    
    return near
}