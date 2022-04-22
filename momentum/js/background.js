const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

// createElement() - javaScript에서 html element 만들기
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
// body에 추가
document.body.appendChild(bgImage);
// append - 가장 뒤에 추가
// prepend - 가장 앞에 추가