class MyDate  
{
    constructor(day,month,year){
        this.day = day;
        this.month = month;
        this.year = year;
    }
    Date(day,month,year){
        this.day = day;
        this.month = month;
        this.year = year;
    }
    getDay(){
        return this.day;
    }
    getMonth(){
        return this.month;
    }
    getYear(){
        return this.year;
    }
    setDay(day){
        this.day = day;
    }
    setMonth(month){
        this.month = month;
    }
    setYear(year){
        this.year = year;
    }
    setDate(day,month,year){
        this.day = day;
        this.month = month;
        this.year = year;
    }
    toString(){
       let day = this.day.toString();
       let month = this.month.toString();
       let year = this.year;
       if(day.length==1){
           day = `0${day}`;
       }
       if(month.length==1){
           month = `0${month}`;
       }
       return `${day}/${month}/${year}`;
    }
}
let date = new MyDate(5,2,2007);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
// alert(`${day} /${month}/${year}`);
console.log(date.toString());