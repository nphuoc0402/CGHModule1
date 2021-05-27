class Battery{
    constructor(energy){
        if(energy<=100 && energy>0){
            this.energy = energy;

        }else {
            throw `Invalid value ${energy}`;
        }
    }
    setEnergy(energy){
        if(energy<=100 && energy>0){
            this.energy = energy;

        }else {
            throw `Invalid value ${energy}`;
        }
    }
    getEnergy(){
        return this.energy;
    }
    decreaseEnergy(){
        if(this.energy>0){
            this.energy--;
        }
    }
}
class FlashLamp{
    constructor(status,battery){
        this.status = status;
        this.battery = battery;
    }
    setBattery(battery){
        this.battery = battery;
    }
    getBatteryInfo(){
        return this.battery.getEnergy();
    }
    light(){
        if(this.status){
            document.write(`Linghting <br>`);
        }else {
            document.write(`Not lighting <br>`);
        }
    }
    turnOn(){
        this.status = true;
    }
    turnOff(){
        this.status = false;
    }
}
let bat = new Battery(50);
let lamp = new FlashLamp();
lamp.setBattery(bat);
lamp.turnOn();
lamp.light();


