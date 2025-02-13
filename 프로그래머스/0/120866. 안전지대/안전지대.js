function solution(board) {
    const n = board.length;
    const dangerZone = Array.from({ length: n }, () => Array(n).fill(0));

    // 지뢰 주변 8방향 이동 좌표
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    // 지뢰(1) 위치 찾고 위험 지역 표시
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                dangerZone[i][j] = 1; // 지뢰 위치
                for (const [dx, dy] of directions) {
                    const x = i + dx;
                    const y = j + dy;
                    if (x >= 0 && x < n && y >= 0 && y < n) {
                        dangerZone[x][y] = 1; // 위험 지역 표시
                    }
                }
            }
        }
    }

    // 안전한 지역(0)의 개수 세기
    return dangerZone.flat().filter(cell => cell === 0).length;
}

