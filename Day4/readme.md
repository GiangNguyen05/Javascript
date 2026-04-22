#### JS Trainning

1. Object
   const object = {
   key: value,
   }

   vd:
   const object = {
   name: "G",
   age: 20
   }
   console.log{object.name} --> "G" // đã có thì js sẽ hiểu mình muốn lấy data
   object.address = "abc" // chưa có nên js sẽ hiểu mình muốn thêm data
   --> person = {
   name: "G",
   age: 20,
   address: "abc"
   }
   delete person.age; // xóa phần tử.

2. Dùngfor
   - for ... in : duyệt qua thuộc tính
     - for(let key in object){
       console.log(key, object[key])
       }
   - for ... of : duyệt qua giá trị
     - for(let value of object.values(object)){
       console.log(value)
       }

4:44:00
