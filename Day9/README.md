## Setup Dự Án Backend

Bước 1: Download/clone dự án thực hành tại đây

Bước 2: Cài đặt thư viện cần thiết
npm i

Bước 3: Cấu hình port (nếu muốn)
//json-server.json

Bước 4: Chạy dự án backend
npm run dev
http://localhost:8000/

## Async/Await là gì?

- async/await là cú pháp hiện đại nhất trong JavaScript để xử lý bất đồng bộ, được giới
  thiệu từ ES2017 (ES8).
- Nó là một cách viết gọn gàng hơn cho Promise, giúp code đọc giống như code đồng bộ,
  dễ hiểu và dễ bảo trì hơn.

### So sánh với Promise

- Promise:
  getUser()
  .then(user => getProfile(user))
  .then(profile => getSettings(profile))
  .then(settings => console.log(settings))
  .catch(err => console.error(err));

- async/await:
  async function showSettings() {
  try {
  const user = await getUser();
  const profile = await getProfile(user);
  const settings = await getSettings(profile);
  console.log(settings);
  } catch (err) {
  console.error(err);
  }
  }
