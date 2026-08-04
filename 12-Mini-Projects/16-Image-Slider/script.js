const images = [
  "https://picsum.photos/id/1015/500/300",
  "https://picsum.photos/id/1025/500/300",
  "https://picsum.photos/id/1035/500/300",
];

let current = 0;

const image = document.getElementById("image");

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % images.length;
  image.src = images[current];
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  image.src = images[current];
});
