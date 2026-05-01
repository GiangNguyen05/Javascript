# Trainning JS

## Tính đóng gói

- public fields: trường công khai
- private fields: trường riêng tư (thêm dấu gach dưới `_balance`), nó vẫn có thể truy cập bên ngoài class
- public method: phương thức công khai
- private method: phương thức riêng tư (thêm dấu # `#balance`), chỉ được dùng gọi trong class
  --> Tính đóng gói cho phép che dấu thoong tin và hành vi của đối tượng.

## DOM

- document.querySelector(".list"): lấy phần từ đầu tiên tìm được
- document.querySelectorAll(".list"): lấy tất cả phần từ tìm được
- getAttribute("href") // lấy thuộc tính
- getAttribute("target", "\_blank") // thêm thuộc tính

## Gợi ý thẻ html trong js

- setting->open setting(Json)
- thêm đoạn này vào
  "emmet.includeLanguages": {
  "javascript" : "javascriptreact"
  }
  "emmet.triggerExpansionOnTab": true;
  ;

## Viết gọn thêm thuộc tính style

`object.assign(heading.style,{
backgroundColor: "red";
fontSize: "1rem";
})`
