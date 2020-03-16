import { colorCode } from '../resistor-color/resistor-color.js' 

export const decodedValue = ([first, second]) => Number(`${colorCode(first)}${colorCode(second)}`) 
