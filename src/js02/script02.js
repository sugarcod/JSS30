setInterval(() => {
  let date = new Date();
  let currentHour = date.getHours() % 12;
  let currentMinute = date.getMinutes();
  let currentSeconds = date.getSeconds();
  console.log(currentMinute, "arrowMinute");

  let arrowHour = document.querySelector(".clock-hour");
  let arrowMinute = document.querySelector(".clock-minute");
  let arrowSecond = document.querySelector(".clock-second");
  // hour 30deg = 1hour
  // minutes && secs 6deg = 1 minuta

  arrowHour.style.transform = `rotate(${(currentHour + 3) * 30}deg)`;

  arrowMinute.style.transform = `rotate(${currentMinute * 6 + 90}deg)`;

  arrowSecond.style.transform = `rotate(${currentSeconds * 6 + 90}deg)`;
}, 1000);
