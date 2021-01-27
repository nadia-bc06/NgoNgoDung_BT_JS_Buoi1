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


 var number=68;
 var hangChuc=0;
 var hangDonVi=0;
 var tong=0;

 hangChuc= Math.floor(number/10);
 hangDonVi= number%10;
 tong=hangChuc+hangDonVi;

console.log("tong 2 ky so la "+tong);
