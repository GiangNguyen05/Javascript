## Đồng Bộ (Synchronous) là gì?

Trong mô hình đồng bộ, các đoạn mã sẽ thực hiện tuần tự.
Mỗi dòng lệnh phải hoàn thành xong trước khi dòng tiếp theo được chạy.
Ví dụ:
console.log("1");
console.log("2");
console.log("3");

## Bất Đồng Bộ (Asynchronous) là gì?

Trong mô hình bất đồng bộ, một số tác vụ có thể chạy nền (non-blocking), cho phép
chương trình tiếp tục thực hiện các đoạn mã khác mà không phải chờ đợi hoàn tất.
Đặc biệt quan trọng trong các thao tác như:

- Chờ API phản hồi
- Đọc/ghi file
- Lấy dữ liệu từ server
- Chờ sự kiện người dùng
  Ví dụ:
  console.log("1");
  setTimeout(() => {
  console.log("2");
  }, 1000);
  console.log("3");

## Promise là gì?

Trong JavaScript, Promise là một đối tượng đại diện cho một giá trị sẽ có trong tương
lai, thường là kết quả của một tác vụ bất đồng bộ như:

- Gọi API
- Đọc file
- Truy vấn cơ sở dữ liệu
  Nói cách khác: Promise giống như một lời hứa:
  "Tôi sẽ cung cấp kết quả sau – hoặc thành công, hoặc thất bại!"

### 3 trạng thái của Promise

Trạng thái Mô tả

- pending: Chưa có kết quả – đang xử lý
- fulfilled: Thành công – trả về kết quả (resolve)
- rejected: Thất bại – trả về lỗi (reject)

//todo: Dùng then(), catch()

## Gọi API với Fetch

### API là gì?

API (Application Programming Interface) là giao diện giúp các ứng dụng giao tiếp với
nhau. Trong web, bạn thường gọi API để lấy dữ liệu từ server – ví dụ: danh sách sản
phẩm, thông tin người dùng, bài viết,...
Ví dụ: Gọi API từ https://jsonplaceholder.typicode.com/users để lấy danh sách người
dùng giả lập.
Hiểu đơn giản: API là 1 url (được backend tạo ra), frontend sẽ gọi tới URL ấy để lấy dữ
liệu (data)

## Fetch là gì?

fetch() là một hàm tích hợp sẵn trong JavaScript, dùng để gửi yêu cầu HTTP đến một
URL (API).

- Được giới thiệu từ ES6
- Trả về Promise
- Hỗ trợ đầy đủ các phương thức HTTP: GET, POST, PUT, DELETE,...
  Cú pháp:
  fetch(url)
  .then(response => response.json())
  .then(data => {
  console.log(data);
  })
  .catch(error => {
  console.error("Có lỗi xảy ra:", error);
  });

### note

- url: Địa chỉ API
- response.json( ) : Chuyển dữ liệu từ JSON sang Object
- .then( ): Xử lý kết quả
- .catch( ): Bắt lỗi nếu có vấn đề

## Lỗi (Error) là gì?

Lỗi là những vấn đề xảy ra trong quá trình thực thi chương trình, khiến chương trình bị
dừng hoặc chạy sai.
Ví dụ:

- Truy cập biến không tồn tại
- Gọi API thất bại
- Chia cho 0 (trong một số ngôn ngữ)
- Cú pháp sai

## Sử dụng try/catch

try {
// code có thể gây lỗi
} catch (error) {
// xử lý lỗi ở đây
} finally {
// luôn chạy sau cùng (nếu cần)
}

## Callback là gì?

Trong JavaScript, một callback là một hàm được truyền vào như một đối số cho một
hàm khác, và sẽ được gọi lại (callback) sau khi hàm kia thực hiện xong công việc của
nó.
Callback thường được dùng trong các tác vụ bất đồng bộ (asynchronous) như:

- Đọc file
- Gọi API
- Chờ đợi sự kiện
  Ví dụ:
  function greet(name, callback) {
  console.log("Hi " + name);
  callback();
  }
  function sayGoodbye() {
  console.log("Goodbye!");
  }
  greet("hoidanit", sayGoodbye);

### Khi nào dùng

- dùng khi tái sử dụng, gọi đc nhiều hàm.
