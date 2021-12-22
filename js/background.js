const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const todayImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${todayImage}`;

document.body.prepend(bgImage);
