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

 var tyGiaUSD=23500;
 var soTienUSD=1000;
 var soTienVND=0;

 soTienVND = soTienUSD*tyGiaUSD;

 var currentFormat = new Intl.NumberFormat("vn-VN");
 var tienFormat = currentFormat.format(soTienVND);
 console.log("So tien quy doi sang VND la " + tienFormat +"VND");