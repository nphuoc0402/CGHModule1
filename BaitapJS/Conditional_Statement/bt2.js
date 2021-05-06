

let button = document.getElementById('button');
button.addEventListener('click',kiemtrangay);
function kiemtrangay(){
    let thang = document.getElementById('thang').value;
    let ketqua = document.getElementById('ketqua');
    if ((thang ==1) || (thang == 3) || (thang ==5) || (thang==8) || (thang == 7) || (thang == 10) || (thang == 12)){
        ketqua="31 ngay";
    
    }
    else if(thang == 2){
        ketqua="28 ngay";
    }
        else if ((thang==4) || (thang == 6) || (thang == 9)|| (thang == 11)){
        ketqua="30 ngay";
    
    }
    else {
        ketqua="Giá trị không hợp lệ.";
    }
    document.getElementById('ketqua').innerText=("Tháng "  + thang + " có " + ketqua);
    
}

