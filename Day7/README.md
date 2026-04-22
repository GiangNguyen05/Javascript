## Alert

- Sử dụng không cần khai báo.
- Alert("ABC"); hiển thị thẳng lên màn hình html ta nhìn thấy.

## Local storage

- Local Storage là một phần của Web Storage API, cho phép bạn lưu trữ dữ liệu ngay
  trong trình duyệt của người dùng.
- Đặc điểm:
  - Dữ liệu không bị mất khi reload or tắt trình duyệt
  - Lưu trữ dạng key-value, string
- Cú pháp:
  Phương thức
  - localStorage.setItem(key, value) --> Lưu dữ liệu (value phải là chuỗi)
  - localStorage.getItem(key) --> Lấy dữ liệu theo key
  - localStorage.removeItem(key) --> Xóa dữ liệu theo key
  - localStorage.clear() --> Xóa toàn bộ dữ liệu đã lưu trong Local Storage
