# Trainning JS

## event Bubbling

- Từ phần tử đích đến cây DOM (từ trong ra ngoài) --> từ child --> parent --> grandParent
  [capture:false]

- VD:
  const grandParent = document.querySelector("#grandParent")
  const parent = document.querySelector("#parent")
  const child = document.querySelector("#child")
  child.addEventListener("click", (e)=>{
  e.stopPropagation(); // khi click vào thì thẻ cha và ông nội kh bị click theo
  console.log("child");
  })

  parent.addEventListener("click", (e)=>{
  e.stopPropagation(); // khi click vào thì ông nội kh bị click theo
  console.log("parent")
  })

  grandParent.addEventListener("click", ()=>{
  console.log("grandParent")
  })

## event Capturing

- Từ cây DOM đến phần tử đích(từ ngoài vào trong) -->grandParent --> parent --> child
  [capture:true]

## Note Bubbling & Capturing

- e.stopPropagation() // ngăn chặn lan truyền từ con đến cha đến ông
- e.stopImmediatePropagation() // ngăn chặn lan truyền cùng 1 element

## Event Delegation

- khi click vào phần tử nào sẽ xóa đi phần tử đó dù chúng ta bắt sự kiện click vào thẻ cha
