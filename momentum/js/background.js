const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

// createElement()
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
// body에 추가
document.body.appendChild(bgImage);