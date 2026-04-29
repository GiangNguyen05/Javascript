# Trainning JS

## Object

- Thêm thuộc tính vào object
  - object.prototype.tenThuocTinh = value;
  - VD: student.prototype.email = "abc@gmail.com"
    console.log(student.email)
- Thêm phương thức vào object
  - object.prototype.tenPhuongThuc = value;
    VD: student.prototype.getAge = function (){
    console.log(2026 - this.birthYear)
    }
    student.getAge();

## Khai báo class (ES6)

### Class expression

- const sinhVien = class {}

### Class decoration

- class sinhVien {
  constructor(fullName, id, birthYear, homeTown){
  this.fullName = fullName;
  this.id = id;
  this.birthYear = birthYear;
  this.homeTown = homeTown;
  }
  }

## Các loại phương thức đối tượng trong js

- Có 2 loại
  - instance method: là phương thức ĐƯỢC GẮN LIỀN VỚI ĐỐI TƯỢNG CỤ THỂ đc tạo ra từ một class-->thực hiện hành động cụ thể trên thể hiện đó
  - VD: class sinhVien {

    constructor(fullName, id, birthYear, homeTown){
    this.fullName = fullName;
    this.id = id;
    this.birthYear = birthYear;
    this.homeTown = homeTown;
    }

    //Phuong thuc instance method

    draw(){
    console.log("Ghi thong tin")
    }

    //Phuong thuc static method

    static Age(birthYear){
    return 2026 - this.birthYear;
    }
    }
    const s1 = new sinhVien("G", 1,2000,"TX")
    s1.draw();

  - static method: là phương thức ĐƯỢC GẮN VỚI LỚP --> được sử dụng để thực hiện các chức năng chung liên quan đến lớp.
    - VD: console.log(sinhVien.Age());
