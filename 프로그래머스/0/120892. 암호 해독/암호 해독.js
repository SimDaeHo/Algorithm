function solution(cipher, code) {
    let result = '';
    
    // 문자열의 각 인덱스를 1부터 시작하는 위치로 변환하기 위해 i+1을 사용
    for (let i = code - 1; i < cipher.length; i += code) {
        result += cipher[i];
    }
    
    return result;
}