const colors = ["#1abc9c", "#3498db", "#9b59b6", "#e74c3c"];
const target = document.querySelector("h2");

const superEventHandler = {
  handleMouseEnter: function() {
    target.innerText = "The mouse is here!";
    target.style.color = colors[0];
  },
  handleMouseLeave: function() {
    target.innerText = "The mouse is gone!";
    target.style.color = colors[1];
  },
  handleResize: function() {
    target.innerText = "You just resized!";
    target.style.color = colors[2];
  },
  handleContextMenu: function() {
    target.innerHTML = "That was a right click!";
    target.style.color = colors[3];
  }
};

target.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
target.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
// window는 현재 스크립트가 작동 중인 창을 나타내는 객체
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleContextMenu);
