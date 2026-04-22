## Scope

- phạm vi toàn cục(global scope): cả dự án chạy. ở đâu cũng dùng đc(hạn chế dùng)
- phạm vi function (function scope): khai báo func nào sài trong func đó
- phạm vi khối (block scope): khai báo biến số trong block giới hạn dấu {}
  note: code chạy từ trên xuống dưới

## array

- ví dụ: let arrId = [a,b,c];
- truy cập một phần tử không tồn tại ->undefined
- thêm vào đầu mảng push()
- thêm vào cuối mảng unshift()
- xóa đầu mảng pop()
- xóa cuối mảng shift()

### for():

     - for (let i = 0; i < arrName.length; i++) {
       console.log(arrName[i]);
       }

### forEach(): đọc dữ liệu(không thay đổi dử liệu)

     - arrName.forEach((value, index) => {
       console.log(value, index);
       });

### map(): không làm thay đổi dử liệu array ban đầu, tạo ra một array mới.

     - const arrNameLop = arrName.map((a, b) => {
       return a + 1;
       });
       linkEbook: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

### filter():lọc loại bỏ có phần tử không đủ điều kiện.

     - const agesx2than8 = ages.filter((a, b) => {
       return a > 5; //điều kiện
       });
       linkEbook: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

4:05:00
