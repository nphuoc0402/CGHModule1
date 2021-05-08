let button = document.getElementById('button');
button.addEventListener('click',checkday);
function checkday(){
    let month = document.getElementById('month').value;
    // alert(month);    
    let showmsg = "null"
    switch(month){
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            showmsg = "có 31 ngày";
            break;
        case "4":
        case "6":
        case "9":
        case "11":
            showmsg = "có 30 ngày";
            break;
        case "2": 
            showmsg = "có 28 hoặc 29 ngày";
            break;
        default:
            showmsg = "không hợp lệ";
            break;
    }
    document.getElementById('show').innerText = "Tháng " + month + " " + showmsg;
}