/**
 * mo hinh 3 khoi: tinh tong 2 ky so
 * 
 * input
 * 
 * number=68;
 * hangChuc=0;
 * hangDonVi=0;
 * tong=0;
 * 
 * xuly
 * 
 * hangchuc=number/10;
 * hangDonVi=number%10;
 * 
 * output
 * 
 * thong bao tong 2 ky so
 * 
 * 
 */
function tinhTong(){
    
    var number = document.getElementById("soHaiChuSo").value;

    var hangChuc = Math.floor(number/10);
    var hangDonVi = (number%10);
    var tong = hangChuc + hangDonVi;

    document.getElementById("thongBaoTong").innerHTML = "Tong 2 ky so la: " + tong;
    document.getElementById("thongBaoTong").style.display="block";
   
}


