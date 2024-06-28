let sWatchTime = 0;

const timerEl = document.getElementById("timer");
const stopBtnEl = document.getElementById("stopBtn");
const playBtnEl = document.getElementById("playBtn");
const resetBtnEl = document.getElementById("resetBtn");

// adding event on document loading
document.addEventListener("DOMContentLoaded", () => {
  timerEl.textContent = updateDisplayTime(sWatchTime);
});

// function to get updated timer in realtime
function updateDisplayTime(seconds) {
  const newDate = new Date(0);
  newDate.setHours(0);
  newDate.setMinutes(0);
  newDate.setSeconds(seconds);
  // console.log(newDate);
  const timeString = newDate.toTimeString().substring(0, 9);
  console.log(timeString);
  return timeString;
}

// adding event listener to play button
playBtnEl.addEventListener("click", () => {
  // disabling the play button on click, if not done than if button is clicked again it will setInterval again and sWatchTime will start getting incremented faster.
  playBtnEl.disabled = true;
  const incrementTime = setInterval(() => {
    sWatchTime++;
    timerEl.textContent = updateDisplayTime(sWatchTime);
  }, 1000);

  // stop time function to stop the timer
  const stopTime = () => clearInterval(incrementTime);

  stopBtnEl.addEventListener("click", () => {
    stopTime();
    playBtnEl.disabled = false;
  });

  // resetting the timer
  resetBtnEl.addEventListener("click", () => {
    playBtnEl.disabled = false;
    sWatchTime = 0;
    timerEl.textContent = updateDisplayTime(sWatchTime);
    stopTime();
  });
});
