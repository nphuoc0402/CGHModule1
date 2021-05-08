
function view(input){
    document.getElementById('display').value += input;
}
function calculat(){
    let x = document.getElementById('display').value;   
    let y = eval(x);
    document.getElementById('display').value = y;
    if(y==undefined){
        alert("Please enter the number");
        document.getElementById('display').value = "";
    }
    
} 
function clearnum(){
    
    document.getElementById('display').value = "" ;
}