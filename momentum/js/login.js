// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // ⚡️ default behavior을 바꾸기 위한 함수 preventDefault() 
  event.preventDefault();
  // submit후 form 사라지게 (form은 숨기고 h1은 표시되도록 -> 표시할 텍스트가 있을 경우)
  // 1. html 요소 자체 없애기
  // 2. css 통해서 안보이게 하기 ✨ (-> .hidden)
  loginForm.classList.add(HIDDEN_CLASSNAME); // -> form 숨기기
  const username = loginInput.value; 

  // Saving Username -> ⚡️ localStorage (브라우저에 뭔가 저장해줌)
  // localStorage.setItem("username", "nico");
  // localStorage.getItem("username"); -> nico
  // localStorage.removeItem("username");
  localStorage.setItem(USERNAME_KEY, username);

  // 함수 호출
  paintGreetings(username);

}

function paintGreetings(username){
  // greeting.innerText = "Hello " + username
  // 비어있는 h1요소에 텍스트 추가하기
  greeting.innerText = `Hello ${username}`;
  // h1요소 class="hidden" 제거 -> h1 보여줌
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
// 저장된 값이 없으면 null을 반환해준다.

// ⬇️⬇️ 제일 먼저 실행! ⬇️⬇️
if(savedUsername === null){
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME); // -> show form (remove class="hidden" in form)

  // click이 아닌 submit 감지. submit은 엔터를 누르거나 버튼을 클릭할 때 발생
  // 1. form을 submit할 때 입력값 받아내기
  // 2. 새로고침 막기 (브라우저는 엔터를 누를 때 새로고침을 하고 form을 submit 기본 설정 되어 있다.) -> preventDefault()
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}

// JS만으로 작업시 (추천 x) -> HTML에 해준다
// if(username === "") {
//   alert("Please write your name"); -> required
// } else if(username.length > 15) {
//   alert("Your name is too long."); -> maxlength="15"
// }

// preventDefault() 다른 예시
// html- <a href="https://nomadcoders.co">Go to courses</a>
// const link = document.querySelector("a");
// function handleLinkClick(event){
//   event.preventDefault();
//   console.dir(event);
// }

// link.addEventListener("click", handleLinkClick);
// handleLinkClick({information about the event that just happened})
// -> EventListener 함수의 첫번째 argument로 주어짐
// addEventListener 안에 있는 함수는 직접 실행하지 않는 다는 것을 꼭 기억하자! (브라우저가 함)
// 브라우저가 실행만 시켜주는 것이 아니라 event에 대한 정보도 담아준다.