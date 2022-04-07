let key = document.querySelectorAll(".key");

//onclick screen
let keyArr = Object.keys(key);
keyArr.map((elem) => {
  key[elem].addEventListener("click", (e) => {
    key[elem].classList.add("green");
    setTimeout(() => {
      key[elem].classList.remove("green");
    }, 100);
    let atr = key[elem].getAttribute("data-key");
    let audio = document.querySelector(`[data-au="${atr}"]`);
    audio.currentTime = 0;
    audio.play();
  });
});

//button click

window.addEventListener("keydown", (e) => {
  console.log(e, "e");
  let atr = e.keyCode;
  let button = document.querySelector(`[data-key="${atr}"]`);
  button.classList.add("green");
  setTimeout(() => {
    button.classList.remove("green");
  }, 100);
  let audio = document.querySelector(`[data-au="${atr}"]`);
  audio.currentTime = 0;
  audio.play();
});
