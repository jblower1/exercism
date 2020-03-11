import { colorCode } from '../resistor-color/resistor-color.js' 

export const decodedValue = (colors) => Number(colors.reduce((acc, color)=> acc + colorCode(color), "").substring(0,2)) 
