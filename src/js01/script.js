let key = document.querySelectorAll(".key");

let keyArr = Object.keys(key);
keyArr.map((elem) => {
  key[elem].addEventListener("click", (e) => {
    key[elem].classList.add("green");
    setTimeout(() => {
      key[elem].classList.remove("green");
    }, 100);
  });
});
