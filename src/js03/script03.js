let spacing = document.querySelector("#spacing");
let blur = document.querySelector("#blur");
let color = document.querySelector("#base");
let image = document.querySelector("img");

spacing.addEventListener("change", () => {
  image.setAttribute(
    "width",
    `${800 - spacing.value} < 600 ? reverse = true : ${800 - spacing.value} `
  );
});

blur.addEventListener("change", () => {
  console.log(`blur(${blur.value}px)`, "blur.value");
  image.style.filter = `blur(${blur.value}px)`;
});

color.addEventListener("change", () => {
  let cl = color.value;
  document.body.style.background = cl;
  document.querySelector(".hl").style.color = cl;
});
