


let xeploai = document.getElementById('xeploai');
xeploai.addEventListener('click',kqxeploai);

function kqxeploai(){
    let diem =document.getElementById('diem').value;
    let xeploai;
    ((diem <=10)? ((diem >=9)? xeploai="Xuất Sắc" : (diem >=8)? xeploai="Giỏi" : (diem >=7)? xeploai="Khá" : (diem>=6)? xeploai="Trung Bình": (diem>0)? xeploai="Yếu": xeploai="Gia tri khong hop le"): xeploai=("Gia tri khong hop le"));   
    // let ketqua = document.getElementById('ketqua');
    document.getElementById('ketqua').innerText=(xeploai);
}
