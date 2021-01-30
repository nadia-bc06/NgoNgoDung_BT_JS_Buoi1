/**
 * mo hinh ba khoi: quy doi tien
 * 
 * input
 * 
 * tyGiaUSD=23500;
 * soTienUSD=1000;
 * soTienVND=0;
 * 
 * xuly
 * soTienVND=soTienUSD*tyGiaUSD
 * 
 * output
 * thong bao so tien VND
 * 
 */


function quyDoi(){

    var soTien_USD = document.getElementById("soTienUSD").value;

    var tyGia_USD = 23000;

    var soTien_VND = parseInt(soTien_USD) * parseInt(tyGia_USD);

    var currentFormat = new Intl.NumberFormat("vn-VN");
    var tien_Format = currentFormat.format(soTien_VND);

    document.getElementById("thongBaoTienVND").innerHTML = "So tien quy doi sang tien Viet la " + tien_Format +"VND" ;
    document.getElementById("thongBaoTienVND").style.display="block"




}




