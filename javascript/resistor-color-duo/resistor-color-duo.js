
export const decodedValue = (colors) => Number(colors.reduce((acc, color)=> acc + colorCode(color), "").substring(0,2)) 

export const colorCode = (color) => COLORS.indexOf(color)

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
