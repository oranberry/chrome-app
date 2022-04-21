### Requirement

1. 마우스가 title 위로 올라가면 텍스트 변경
2. 마우스가 title을 벗어나면 텍스트 변경
3. 브라우저 창의 사이즈가 변하면 title 변경
4. 마우스 우 클릭하면 title 변경
5. title의 색상은 colors 배열에 있는 색 사용
6. 모든 함수 핸들러는 superEventHandler 내부에 작성

참고: 현재 스크립트가 작동 중인 창을 나타내는 객체는 window 이다.  
https://developer.mozilla.org/en-US/docs/Web/API/Window

사용할 수 있는 이벤트: https://developer.mozilla.org/en-US/docs/Web/Events

- mouseenter: 마우스가 위로 올라갔을 때 발생하는 이벤트  
  https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event
- mouseleave: 마우스가 떠났을 때 발생하는 이벤트  
  https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event
- contextmenu: 사용자가 요소를 마우스 우 클릭해 메뉴를 열 때 발생하는 이벤트  
  https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event
- resize: 브라우저 창의 사이즈가 변할 때 발생하는 이벤트  
  https://developer.mozilla.org/ko/docs/Web/API/Window/resize_event
