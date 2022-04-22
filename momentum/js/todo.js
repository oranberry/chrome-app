const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos"; // localStrage Key name

// 새로운 to do가 만들어질 때 마다 저장하기 위해 필요한 array
let toDos = [];

// 새로 고침하면 to do list가 사라지는 문제를 해결하기 위해서는 저장해야 한다.
// Saving To Dos using localStorage
function saveToDo(){
  // localStorage에 array의 요소 저장해야 한다.
  // 단, localStorage에는 array를 저장할 수 없음, text만 가능하기 때문에 해결방법 필요!
  // object이나 array 등 다른 요소 ----> string: JSON.stringify()
  // 반대로, string ----> array: JSON.parse()
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

// Deleting To Dos
function deleteToDo(event){
  // target: 클릭된 HTML element (각 요소에는 하나 이상의 property가 있다.)
  // parentNode = parentElement: 클릭된 element의 부모
  const listItem = event.target.parentElement;
  listItem.remove(); // 선택한 to do list 지우기

  // to do를 지울 때마다 local storage에 업데이트 해주기
  // 우리가 클릭한 listItem.id와 다른 to do는 남기기
  // 단, listItem.id의 타입이 string이고 toDo.id는 number여서 타입 맞춰야함: parseInt() 사용
  toDos = toDos.filter(toDo => toDo.id !== parseInt(listItem.id));
  // 지우고 싶은 item을 제외하고 새 array를 만듬: filter()
  // 만약 새 array에서 object을 유지하고 싶으면 반드시 true return
  // false를 return 하면 해당 item은 새 array에 포함되지 않음

  // localStorage에서 to do를 지운 후에 saveToDo() 함수 불러주기!
  saveToDo();
}

// Adding ToDos
// li (list item)을 만들어서 li를 ul에 추가하기
function paintToDo(newToDo){
  const listItem = document.createElement("li");
  listItem.id = newToDo.id;
  // 생성 후 지울 수 있는 버튼과 같이 만들 예정이라 span 사용
  const span = document.createElement("span"); 
  // handleToDoSubmit 에서 넘어온 newToDo 값 (text)
  span.innerText = newToDo.text; 
  
  // 지울 때 사용할 버튼
  const button = document.createElement("button"); 
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  listItem.appendChild(span); // li 안에 span 추가
  listItem.appendChild(button); // li 안에 button 추가
  toDoList.appendChild(listItem); // ul에 li 추가
}

function handleToDoSubmit(event){
  event.preventDefault(); // 엔터를 쳐도 submit의 기본 동작인 새로고침이 일어나지 않음

  // input의 value 가져오기 -> 값 저장
  const newToDo = toDoInput.value;
  // Enter를 누를 때마다 입력한 것 비우기 (value에 빈값 넣기 "")
  // input의 value를 새 변수에 저장해놨기 때문에 값을 비워도 newToDo에 값이 저장되어 있음.
  toDoInput.value = "";

  // to do를 add할 때마다 id를 가지고 있는 object로 바꾸고 array에 추가해주기
  const newToDoObj = {
    text: newToDo,
    id: Date.now(), // random으로 id 만들기: Date.now()
  };
  toDos.push(newToDoObj);

  paintToDo(newToDoObj); // 저장한 input의 value 넘겨주기
  saveToDo(); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// localStorage에 string으로 저장되어 있는 item 불러오기
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  // string으로 저장되어 있는 item을 array로 바꿔줌: JSON.parse()
  const parsedToDos = JSON.parse(savedToDos);
  // toDos Array에 전에 저장해 놓은 Array 복원
  toDos = parsedToDos;
  // array의 각 item에 대해 함수 실행: forEach()
  parsedToDos.forEach(paintToDo);
}