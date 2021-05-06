let diem = (prompt ("Nhap diem"));

switch((diem <=10)? ((diem >=9)? "9": (diem >=8)? "8" : (diem >=7)? "7" : (diem>=6)? "6": (diem>=0)? "5": "null") : "null"){
    
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
        alert("Giá trị không hợp lệ!");
        break;
}