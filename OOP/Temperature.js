class Temperature {
    constructor(C){
        this.C = C;
    }
    ConvertCtoF(){
        return this.C*(9/5)+32;
    }
    ConvertCtoK(){
        return this.C + 275.15;
    }

}
let temp = new Temperature(25);
console.log(temp.ConvertCtoF());
console.log(temp.ConvertCtoK());