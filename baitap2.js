/**
 * mo hinh 3 khoi: tinh gia tri trung binh
 * *input
 * soThuc1=5;
 * soThuc2=67;
 * soThuc3=342;
 * soThuc4=32;
 * soThuc5=6534;
 * trungBinh=0;
 * *Xu ly
 * trungBinh=(soThuc1+soThuc2+soThuc3+soThuc4+sothuc5)/5
 * *output
 * xuat thong bao so trung binh
 * 
 */
function tinhTrungBinh(){
   

    var soThu_1 = document.getElementById("soThuNhat").value;
    var soThu_2 = document.getElementById("soThuHai").value;
    var soThu_3 = document.getElementById("soThuBa").value;
    var soThu_4 = document.getElementById("soThuTu").value;
    var soThu_5 = document.getElementById("soThuNam").value;
    
    var trungBinh = (parseInt(soThu_1) + parseInt(soThu_2)+ parseInt(soThu_3) +parseInt(soThu_4) + parseInt(soThu_5))/5;

    document.getElementById("thongBaoTrungBinh").innerHTML = "Trung binh la " + trungBinh;
    document.getElementById("thongBaoTrungBinh").style.display="block";
    document.getElementById("thongBaoTrungBinh").classList.add("alert-primary");

}
