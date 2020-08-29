var h = 0;
var m = 0;
var s = 0;
var x;
//var deadline = new Date(currentTime + m*60*1000 + s*1000);
/*
function showTime() {
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = m + ":" + s + " ";
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
}
*/

//document.getElementById("startbutton").addEventListener("click", startCount);
document.getElementById("startbutton").onclick = function () {
  stopCounter();
  startCount();
};

document.getElementById("stopbutton").onclick = function () {
  stopCounter();
  document.getElementById("MyClockDisplay").innerHTML = "00:00:00";
};

function stopCounter() {
  clearInterval(x);
}

function startCount() {
  h = document.getElementById("hours").value;
  m = document.getElementById("minutes").value;
  s = document.getElementById("seconds").value;
  startTimer();
}

function startTimer() {
  //var currentTime = Date.parse(new Date());
  //var countDownDate = new Date(
  // currentTime + m * 60 * 1000 + s * 1000
  //).getTime();
  var currentTime = Date.parse(new Date());
  var countDownDate = new Date(
    currentTime + h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000 + 1000
  ).getTime();
  // Update the count down every 1 second
  x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var time = hours + ":" + minutes + ":" + seconds;
    // Output the result in an element with id="demo"
    //document.getElementById("MyClockDisplay").innerHTML =
    //time;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("MyClockDisplay").innerHTML = "Time's Up";
    }
  }, 1000);
}