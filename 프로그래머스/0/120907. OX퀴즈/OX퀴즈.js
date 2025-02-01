function solution(quiz) {
    return quiz.map(q => {
        const [X, op, Y, , Z] = q.split(" ");
        const result = op === "+" ? Number(X) + Number(Y) : Number(X) - Number(Y);
        return result === Number(Z) ? "O" : "X";
    });
}
