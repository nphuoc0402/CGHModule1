class Temperature {
  constructor(C) {
    if (C >= -273) {
      this.C = C;
    }else {
        throw `invalid Value ${C}`;
    }
  }
  ConvertCtoF() {
    return this.C * (9 / 5) + 32;
  }
  ConvertCtoK() {
    return this.C + 275.15;
  }
}
let temp = new Temperature(-290);
console.log(temp.ConvertCtoF());
console.log(temp.ConvertCtoK());
