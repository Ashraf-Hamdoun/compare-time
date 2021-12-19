// function to convert milliseconds to normal time
const reverseTime = (time) => {
  let reastOfHr = time % 3600000;
  let hr = (time - reastOfHr) / 3600000;

  let reastOfMin = reastOfHr % 60000;
  let min = (reastOfHr - reastOfMin) / 60000;

  let ms = reastOfMin % 1000;
  let sec = (reastOfMin - ms) / 1000;

  return { hr, min, sec, ms, timeInMs: time };
};

// convert time in milliseconds
const timeInMs = (time) => {
  let hrInMs = time.hr * 3600000;
  let minInMs = time.min * 60000;
  let secInMs = time.sec * 1000;
  let ms = time.ms;

  return hrInMs + minInMs + secInMs + ms;
};

// function to compare time and calculate part of time difference
const compareTime = (inObj, timeParts, run) => {
  isRun = run;
  let outObj = {};

  let sumTimeParts = 0;
  for (let i = 0; i < timeParts.length; i++) {
    const part = timeParts[i];
    sumTimeParts += part;
  }

  if (isRun) {
    let initialTimeInMs = timeInMs(inObj);

    let date = new Date();
    let currentHr = date.getHours();
    let currentMin = date.getMinutes();
    let currentSec = date.getSeconds();
    let currentMs = date.getMilliseconds();

    let currentTimeInMs = timeInMs({
      hr: currentHr,
      min: currentMin,
      sec: currentSec,
      ms: currentMs,
    });

    outObj = reverseTime(currentTimeInMs - initialTimeInMs + sumTimeParts);
  } else {
    outObj = reverseTime(sumTimeParts);
  }

  return outObj;
};

module.exports = compareTime;
