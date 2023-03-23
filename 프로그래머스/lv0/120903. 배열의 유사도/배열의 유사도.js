function solution(s1, s2) {
var answer = 0;
s1.forEach(v=>{
s2.indexOf(v) != -1 ? answer++ : 1
})
return answer;
}



function solution(s1, s2) {
    var answer = 0;
    for (var i = 0; i < s1.length; i++){
        for (var j = 0; j < s2.length; j++){
            if(s1[i] === s2[j]) answer++;
        }
    }
    return answer;
}