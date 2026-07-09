/* Shared time-tools helpers: parsing, duration math, overnight/midnight handling */

/* Parse "HH:MM AM/PM" or "HH:MM" (24h) into minutes-since-midnight */
function parseTimeToMinutes(timeStr, meridiem){
  if(!timeStr) return null;
  let [h,m] = timeStr.split(":").map(Number);
  if(isNaN(h) || isNaN(m)) return null;
  if(meridiem){
    meridiem = meridiem.toUpperCase();
    if(meridiem === "AM"){ if(h===12) h=0; }
    else if(meridiem === "PM"){ if(h!==12) h+=12; }
  }
  return h*60+m;
}

/* Duration in minutes between start and end, handling overnight (end < start => +1 day) */
function durationMinutes(startMin, endMin){
  let diff = endMin - startMin;
  if(diff < 0) diff += 24*60;
  return diff;
}

function minutesToHM(totalMinutes){
  const h = Math.floor(totalMinutes/60);
  const m = Math.round(totalMinutes%60);
  return `${h}h ${m}m`;
}

function minutesToDecimalHours(totalMinutes){
  return (totalMinutes/60).toFixed(2);
}
