function solution(keyinput, board) {
    let x = 0, y = 0;
    let xLimit = Math.floor(board[0] / 2);
    let yLimit = Math.floor(board[1] / 2);
    
    for (let key of keyinput) {
        if (key === "left" && x > -xLimit) x--;
        else if (key === "right" && x < xLimit) x++;
        else if (key === "up" && y < yLimit) y++;
        else if (key === "down" && y > -yLimit) y--;
    }

    return [x, y];
}