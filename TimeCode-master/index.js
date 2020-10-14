const fs = require("fs");
const interval = 0.01 * 60 * 1000;
setInterval(() => {
  let datetime = new Date();
  // New Date Object
  let date = ("0" + datetime.getDate()).slice(-2);
  // current date
  // adjust 0 before single digit date
  let month = ("0" + (datetime.getMonth() + 1)).slice(-2);
  // current month
  let year = datetime.getFullYear();
  // current year
  let hours = datetime.getHours();
  // current hour(s)
  let minutes = datetime.getMinutes();
  // current minute(s)
  let seconds = datetime.getSeconds();
  if (minutes.toString().length === 1) {
    minutes = "0" + minutes;
  }
  if (seconds.toString().length === 1) {
    seconds = "0" + seconds;
  }
  // current second(s)
  let DateCool = hours + ":" + minutes;
  let DateCoolDate = year + "-" + month + "-" + date;

  fs.writeFile("time.txt", DateCool + "\n" + DateCoolDate, function (err) {
    if (err) console.log(err);
  });

  console.info(DateCool);
  console.log(year + "-" + month + "-" + date);
  // prints date in YYYY-MM-DD format
  console.log(
    year +
      "-" +
      month +
      "-" +
      date +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds
  );
  // prints date in time in YYYY-MM-DD format, including HH:MM:SS format
  console.log(hours + ":" + minutes);
}, interval);
