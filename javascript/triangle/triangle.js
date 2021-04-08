export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isEquilateral() {
    return this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.isTriangle;
  }

  get isIsosceles() {
    //rules: at least two sides the same length
    return (this.sides[0] === this.sides[1] ||
           this.sides[0] === this.sides[2] ||
           this.sides[1] === this.sides[2]) && 
           this.isTriangle;
  }

  get isScalene() {
    return this.isTriangle && !this.isEquilateral && !this.isIsosceles;
  }

  get isTriangle() {
    return this.sidesHaveLength && this.validSides;
  }

  get sidesHaveLength() {
    return this.sides.every((side) => {return side !== null && side > 0})
  }

  get validSides() {
    let sidesWorking = [...this.sides];
    return this.sides.every((side, index) => {
      //remove side
      sidesWorking.splice(index, 1);
      //add length of leftover sides
      let other2SidesSum = sidesWorking.reduce((length, side) => { return length + side; }, 0);
      //replace side
      sidesWorking.splice(index, 0, side);
      return other2SidesSum >= side;
    })
  }

  get sides(){
    return this._sides;
  }
  set sides(sides){
    this._sides = sides;
  }
}
