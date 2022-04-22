const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();
  // padStart() - string에 쓸 수 있는 함수 
  // (stringlength, 앞에 추가할 "string") <--> padEnd()
  // String() - number -> text 바꾸는 함수
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`


}
getClock()
setInterval(getClock, 1000);

// function sayHello(){
//   console.log("hello");
// }
// interval을 설정하는 함수 - setInterval()
// 첫번째 argument - 실행하고자 하는 function 
// 두번째 arugument - milliseconds 으로 나타낸 간격 (5000 -> 5초)
// setInterval(sayHello, 5000);

// timeouts
// 첫번째 argument - 실행하고자 하는 function
// 두번째 argument - milliseconds 으로 나타낸 간격 (5000 -> 5초)
// setTimeout(sayHello, 5000);

// const date = new Date();
// date.getDate();
// date.getDay();
// date.getFullYear();
// date.getHours();
// date.getMinutes();
// date.getSeconds();