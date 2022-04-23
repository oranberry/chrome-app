// const body = document.querySelector("body");
const body = document.body;

const LARGE_SCREEN = "largeScreen";
const MEDIUM_SCREEN = "mediumScreen";
const SMALL_SCREEN = "smallScreen";

function handleResize() {
  // innerWidth: 브라우저의 가로 길이를 나타내는 window 객체의 property
  const screenWidth = window.innerWidth;

  if (screenWidth > 1200) {
    body.classList.add(LARGE_SCREEN);
    body.classList.remove(MEDIUM_SCREEN);
  } else if (screenWidth <= 1200 && screenWidth >= 800) {
    body.classList.add(MEDIUM_SCREEN);
    body.classList.remove(LARGE_SCREEN, SMALL_SCREEN);
  } else {
    body.classList.add(SMALL_SCREEN);
    body.classList.remove(MEDIUM_SCREEN);
  }
}

window.addEventListener("resize", handleResize);
