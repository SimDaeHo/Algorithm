function solution(polynomial) {
    let terms = polynomial.split(" + ");
    let xSum = 0, numSum = 0;

    for (let term of terms) {
        if (term.includes("x")) {
            let coefficient = term === "x" ? 1 : parseInt(term.replace("x", ""));
            xSum += coefficient;
        } else {
            numSum += parseInt(term);
        }
    }

    let result = [];
    if (xSum > 0) result.push(xSum === 1 ? "x" : `${xSum}x`);
    if (numSum > 0) result.push(`${numSum}`);

    return result.join(" + ");
}