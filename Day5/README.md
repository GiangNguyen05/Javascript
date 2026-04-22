#### JS Trainning

DOM (viết tắt của Document Object Model) là một mô hình dạng cây đại diện cho cấu
trúc của một trang web.

- Khi trình duyệt tải trang HTML, nó phân tích (parse) nội dung HTML và tạo ra một
  mô hình dạng cây DOM.
- Mỗi thẻ HTML trong tài liệu sẽ được chuyển thành một "đối tượng" (object) mà
  JavaScript có thể truy cập và thao tác.

- Một số cách phổ biến để truy cập phần tử

✅ document.getElementById(id)
vd: const element = document.getElementById("userName")

✅ document.querySelector(selector)
Dùng để tìm phần tử đầu tiên khớp với CSS selector (id, class, tag, v.v.).
const firstNote = document.querySelector(".note");

✅ document.querySelectorAll(selector)
Dùng để lấy tất cả phần tử khớp với selector, trả về NodeList (giống mảng).
const allNotes = document.querySelectorAll(".note");
console.log(allNotes.length);

- Dùng addEventListener("sự kiện", function):phương thức tiêu chuẩn và hiện đại để gắn sự kiện vào phần tử
  HTML.
  - Cú pháp: element.addEventListener("eventName", function);

        - element: phần tử HTML bạn muốn gắn sự kiện.

        - "eventName": tên sự kiện, ví dụ "click", "input", "mouseover".

        - function: hàm xử lý khi sự kiện xảy ra

- innerText: thay đổi nội dung dạng chữ mà ng dùng thấy đc(tính css)
- innerHTML: cho phép láy và thay đổi nội dung bên trong thẻ html, bao gồm cả thẻ bao nó
vd:
<p id="greeting">Xin chào!</p>
<script>
const p = document.getElementById("greeting");
p.innerHTML = "<strong>Chào bạn,</strong> <em>học lập trình</em>";
</script>
out: <p>Chào bạn, học lập trình</p>

- Thêm class
  - Cú pháp:
    element.classList.add("nameClass")
- Xóa class
  - cú pháp:
    element.classList.add("nameClass")

5:29:00
