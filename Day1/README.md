#### JS Trainning

1. khai báo biến:
   var : phạm vi rộng không hạn chế (kh nên dùng)
   let : giống var nhưng phạm vi trong func, khai báo ở đâu dùng ở đó. cs thể khai báo nhưng không gắn giá trị.
   const : hằng số. kh thể thay đổi giá trị gán cho nó. khai báo phải gắn giá trị.
   ví dụ: const age = 25;
   age= 30;
   consolog.log(age) erro
   - kiểu dữ liệu:
   - object: key-value
     ví dụ const person = {
     name : "giang",
     age : "26"
     }
2. toán tử trong js

- toán tử số học
  b=a++ : b=a tức là b bằng a rồi mới +(lúc này b = a +1);
  b= ++a : b=a+! tức là + trực tiếp trước rồi mới gán.
- toán tử so sánh
  == so sánh giá trị
  === ss giá trị và datatypeof

3. console.log()

- không nên cộng chuỗi (name: giang , age: 26) : sử dụng dấu phẩy.
  ví dụ: console.log("name: "+ name + ", age" + age)
  nên: console.log("name:", name, ", age",name)
  tô màu cho chuỗi dùng %c
  ví dụ console.log("%c STOP", "color:red; font-weight: bold")

4. sử dụng biến số khi khai báo: `${}` (phải có dấu ``)

const name = ${};
