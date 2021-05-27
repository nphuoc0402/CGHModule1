class SwitchButton{
    SwitchButton(status,lamp){
        this.status = status;
        this.lamp = lamp;
    }
    // connectToLamp(lamp){
    //     this.lamp = lamp;
    // }
    switchOff(){
        this.lamp.turnOff();

    }
    switchOn(){
        this.lamp.turnOn();
    }
}
class ElectricLamp{
    ElectricLamp(status){
        
        this.status = status;
    }
    turnOn(){
        this.status = true;
    }
    turnOff(){
        this.status = false;
    }
}
let light = new ElectricLamp();
let sw = new SwitchButton();
sw.SwitchButton(true,light);
