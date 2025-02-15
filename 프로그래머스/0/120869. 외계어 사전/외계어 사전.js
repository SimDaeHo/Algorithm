function solution(spell, dic) {
    return dic.some(word => 
        spell.every(char => word.includes(char)) && word.length === spell.length
    ) ? 1 : 2;
}

