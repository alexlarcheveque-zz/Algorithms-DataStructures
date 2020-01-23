//  Prompt
// ----------
// There are two methods recordEvent and getEventCountPerMinute
// recordEvent(String eventName, long timeMs);
// getEventCountPerMinute(eventName, startTimeMs, endTimeMs)

//  Example
// ----------
// recordEvent("tweet", 1/21/20 9:00am)
// recordEvent("like", 9:01am)
// recordEvent("tweet", 9:01am)
// recordEvent("tweet", 9:02am)
// recordEvent("tweet", 9:02am)
// recordEvent("tweet", 9:00am)
//
// getEventCountPerMinute("tweet", 9:00am, 9:02am)
// 9:00am - 2
// 9:01am - 1
// 9:02am - 2
//
// Returns [2, 1, 2]

var myMap = new Map();

function recordEvent(event, time) {
  //Convert time to Unix, where this updates every MS
  time = convertToUnix(time);

  if (myMap.get(time)) {
    if (event === "like") {
      myMap.get(time).like++;
    } else if (event === "tweet") {
      myMap.get(time).tweet++;
    }
  } else {
    myMap.set(time, { tweet: 0, like: 0 });
    recordEvent(event, time);
  }
}

//converting Function
function convertToUnix(time) {
  return new Date(2020, 01, 01, 12, 00, 00).getTime() / 1000;
}

function getEventCountPerMinute(event, startTime, endTime) {}

recordEvent("tweet", "01");
recordEvent("like", "9:01AM");
recordEvent("tweet", "9:02AM");

console.log(myMap);

//PsuedoCode
//iterate through each recordEvent
//for each eventName, we will create a map and then create a key for each unique eventName
//this.map.set(key, []);
//this.map.get(key)[time] = value; //time = 9:02:01AM --> Minutes starting at 12:00AM --> 0, 12:01 --> 1, 1440 seconds in total
//value++
// 1/2/20 9:00AM, 1/3/20

// 1579631628000 - unix ts from 1970/01/01 ....
//Substring substring(length - 2, length)

//getEVentCountPerMinute
//Look at Map, then find proper event key, then count tweets between certain times
// Iterate through the unix ts, increase +1 each loop count. Ex: 12:05 to 12:12 --> 5 to 12 --> for loop that increments by one
// Create holder array for each iteration, and then push into this holder array
// 12:05 (5) , 12:06 (6), ... 12:12(12), holder: [number of tweets , , , ]

//"2020-01-21 10:49" to "2020-01-24 12:30"
// 202001211049 to 202001241230
//0-60 min, +1 incrementation --> throw an error

let map = new Map();

var recordEvent = function(eventName, time) {
  //If key does not exist, create new key
  if (!this.map.has(eventName)) {
    this.map.set(eventName, {}); // minute: VAL, hour: day:
  }

  //01/20/20 8:00 AM - 01/24/20 9:00 AM
  //
  // 01/20/19 - 01/20/20

  // key: "2020-01-21 10:49" 202001211049
  //day: [[hour, min],[]]

  //Checks if time exists, if so increment +1. if not, set new time = 1
  if (!this.map.get(key).time) {
    this.map.get(key)[time] = 1;
  } else {
    this.map.get(key)[time]++;
  }
};
