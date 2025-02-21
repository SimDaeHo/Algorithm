function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];

    return babbling.filter(bab => {
        let temp = bab;
        for (let word of words) {
            temp = temp.replace(word, " "); 
        }
        return temp.trim() === ""; 
    }).length;
}
