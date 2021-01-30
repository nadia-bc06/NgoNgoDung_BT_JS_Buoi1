/**
 * mo hinh 3 khoi: tinh dien tich, chu vi hinh chu nhat
 * 
 * input
 * chieuDai=8;
 * chieuRong=5;
 * chuVi=0;
 * dienTich=0;
 * 
 * xuly
 * chuVi=(chieuDai + chieuRong)*2;
 * dienTich=chieuDai*chieuRong;
 * 
 * output
 * thong bao chu vi
 * thong bao dien tich
 * 
 */

function tinhChuViDienTich(){

    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;
    console.log(chieuDai,chieuRong);
    var chuVi=   (parseInt(chieuDai) + parseInt(chieuRong))*2;
    var dienTich= chieuDai*chieuRong;

    var footerChuViDienTich = "<div> Chu Vi la: " + chuVi + "</div>";
    footerChuViDienTich += "<div> Dien Tich la: "+ dienTich + "</div>" ;

    // document.getElementById("thongBaoChuVi").innerHTML = "<div> Chu vi la: " + chuVi + "</div>";
    // document.getElementById("thongBaoDienTich").innerHTML = "<div> Dien tich la: " + dienTich + "</div>";
   
    document.getElementById("thongBaoKetQua").innerHTML = footerChuViDienTich;
    document.getElementById("thongBaoKetQua").style.display="block";
    document.getElementById("thongBaoKetQua").classList.add("alert-danger");


}
 


