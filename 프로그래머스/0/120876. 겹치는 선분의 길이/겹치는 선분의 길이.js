function solution(lines) {
    const lineMap = new Array(201).fill(0); 

    lines.forEach(([start, end]) => {
        for (let i = start; i < end; i++) {
            lineMap[i + 100] += 1;
        }
    });

    return lineMap.filter(count => count >= 2).length;
}
