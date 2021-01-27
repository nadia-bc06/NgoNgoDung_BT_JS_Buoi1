/**
 * Mo hinh 3 khoi
 * *Dau vao (input)
 * luongNgay=100000;
 * soNgayLam=22;
 * soNhanVien=50;
 * *xu ly
 * luongMotNhanVien=luongNgay*soNgayLam;
 *  luongTongNhanVien=luongMotNhanVien*soNhanVien;
 * ket qua(output)
 * thong bao luong
 * 
 */

 var luongNgay=100000;
 var soNgayLam=22;
 var soNhanVien=50;
 var luongMotNhanVien=0;
 var luongTongNhanVien=0;

 luongMotNhanVien=luongNgay*soNgayLam;
 luongTongNhanVien=luongMotNhanVien*soNhanVien;

 var currentFormat = new Intl.NumberFormat("vn-VN");
 var tienFormat = currentFormat.format(luongTongNhanVien);
 console.log("luong tat ca nhan vien la " + tienFormat + "VND");
