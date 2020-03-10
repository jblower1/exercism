
export const reverseString = (string) => {
    let reversed = []
    string.split("").forEach(letter => reversed.unshift(letter))
    return reversed.join("")
};
