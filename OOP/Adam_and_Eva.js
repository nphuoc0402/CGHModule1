class Apple{
    Apple(weight = 10){
        this.weight =weight;
    }
    Decrease(){
        this.weight--;
    }
    isEmpty(){
        if(this.weight>0){
            return true;
        }else return false;
    }
    getWeight(){
        return this.weight;
    }
}
class Human{
    Human(name,gender,weight){
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    isMale(){
        if(this.gender == "male" || this.gender == 'm' || this.gender=='Male' || this.gender == "M"){
            return true;
        } else return false;
    }
    setGender(gender){
        this.gender= gender ;
    }
    checkApple(apple){
        return apple.isEmpty();
    }
    eat(apple){
        this.apple = apple.Decrease(); 
        this.weight++;
    }
    say(){
        console.log("Hello welcome to Heaven! I'm Adam");
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(weight){
        this.weight = weight;
    }


}
let apple = new Apple();
apple.Apple(40);
let a = new Human();
a.Human("bob","Male",75);
