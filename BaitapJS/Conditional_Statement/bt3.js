let diem = prompt ("Nhap diem");
diem = parseInt (diem);
diem = diem.toFixed(0);
switch(diem){
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
        alert("Yếu");
        break;
    case "6":
        alert("Trung binh");
        break;
    case "7":
        alert("Khá");
        break;
    case "8":
        alert("Giỏi");
        break;
    case "9":
        alert("Xuất Sắc");
        break;
    default:
        alert("Gia tri khong hop le");
        break;
}