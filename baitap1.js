/**
 * Mo hinh 3 khoi
 *
 *  *Dau vao (input)
 * luongNgay=100000;
 * soNgayLam=22;
 *
 *  *xu ly
 * luongNhanVien=luongNgay*soNgayLam;
 * 
 * ket qua(output)
 * thong bao luong
 * 
 */

 function tinhLuong(){
   
    var soNgayLam = document.getElementById("soNgayLam").value;
    var luongNgay = document.getElementById("luongNgay").value;

     var luongNhanVien = soNgayLam*luongNgay;

 var currentFormat = new Intl.NumberFormat("vn-VN");
 var tienFormat = currentFormat.format(luongNhanVien);
 var thongBaoLuong = "luong nhan vien la " + tienFormat + "VND";

 document.getElementById("txtThongBao").innerHTML = thongBaoLuong;
 document.getElementById("txtThongBao").style.display = "block";
 document.getElementById("txtThongBao").classList.add("alert-primary");
}

