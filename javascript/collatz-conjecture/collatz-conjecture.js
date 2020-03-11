
export const steps = (n, answers = []) => {
    if(n === 1) return answers.length
    else if(n <= 0) throw new Error("Only positive numbers are allowed")
    else{
        answers.push(n)
        return steps(n % 2 === 0 ? n / 2 : 3*n + 1, answers)
    }
};
