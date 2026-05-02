# Trainning JS

## ClassList

- classlist.add() : thêm class
- classlist.remove() : xóa class
- classlist.toggle() : loại bỏ 1 class đã tồn tại và thêm nó nếu chưa có
- classlist.replace("class", "newClass") : thay thế class củ bàng một class mới
- classlist.contains() : ktra xem phần tử có chứa một class cụ thể hay không

## Truy cập

- parent : phần từ cha
- child : console.log(parent.children);
- sibling :
  - console.log(parent.children[1].nextElementSibling); // lấy phần tử tiếp theo cùng cấp
  - console.log(parent.children[1].previousElementSibling); // lấy phần tử trước đó cùng cấp

## Thêm phần tử con vào cha

- append: thêm vào cuối và thêm cả `node` và cả chuỗi văn bản--> kh trả về giá trị(undefined)-->thêm được nhìu element
  - parent.append(img, a, "day la a")
- appendChild: thêm được `node`-->có trả về giá trị--> chỉ 1 element
  - parent.appendChild(img)
- prepend: thêm vào đầu

b1: create

- const a = document.createElement("img") // tao the img moi
- console.dir(a) // ktra toan bo thuoc tinh va phuong thuc a

b2: setAttribute

- a.setAttribute("src", "image/avatar.png") // cach1
- a.src = "image/avatar.png" // cach2

b3: add

- document.body.append(a);
