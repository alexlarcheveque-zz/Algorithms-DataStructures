var latestTime = function() {
  let latestTime = "11:22";
  let latestTimeArr = latestTime.split("");
  latestTimeArr;

  if (latestTimeArr[1] === "?") {
    latestTimeArr[1] = 3;
  }

  if (latestTimeArr[1] <= 4 && latestTimeArr[0] === "?") {
    latestTimeArr[0] = 2;
  } else if (latestTime[0] === "?") {
    latestTimeArr[0] = 1;
  }

  if (latestTime[3] === "?") {
    latestTimeArr[3] = 5;
  }

  if (latestTime[4] === "?") {
    latestTimeArr[4] = 9;
  }

  latestTimeArr.join("");
};

latestTime = "11:22";
