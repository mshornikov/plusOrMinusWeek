// Getting tag for output
const output = document.querySelector('.status');

function getWeekNumber(date = new Date()) {
    // One day in milliseconds (24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    const dayInMilliseconds = 24 * 60 * 60 * 1000;

    // First January of input year
    const firstJan = new Date(date.getFullYear(), 0, 1);

    const shift = Math.abs(firstJan.getDay() - 1);

    // Amount of days between January first and input date
    const numberOfDays = Math.abs((date - firstJan + (shift * dayInMilliseconds)) / dayInMilliseconds);
    
    // Weeks 
    if (firstJan.getDay() >= 5) {
        var result = Math.floor(numberOfDays / 7);
    } else {
        var result = Math.floor(numberOfDays / 7) + 1;
    }
    
    return result;
}

// if end of the year then same year first September, if start of the year then past first September
function getFirstSep(day) {
    if (day.getMonth() < 8) {
        return new Date(day.getFullYear() - 1, 8, 1); 
    } else {
        return new Date(day.getFullYear(), 8, 1); 
    }
}

const plus = '<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewbox="0 0 46 46"><path d="M24 38.85q-1 0-1.675-.675T21.65 36.5V26.35H11.5q-1 0-1.675-.675T9.15 24q0-1 .675-1.675t1.675-.675h10.15V11.5q0-1 .675-1.675T24 9.15q1 0 1.675.675t.675 1.675v10.15H36.5q1 0 1.675.675T38.85 24q0 1-.675 1.675t-1.675.675H26.35V36.5q0 1-.675 1.675T24 38.85Z"/></svg>';
const minus = '<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewbox="0 0 46 46"><path d="M11.5 26.35q-1 0-1.675-.675T9.15 24q0-1 .675-1.675t1.675-.675h25q1 0 1.675.675T38.85 24q0 1-.675 1.675t-1.675.675Z"/></svg>';

// Plus or Minus
function getWeekType(firstSep, day) {
    if (getWeekNumber(firstSep) % 2 == 0) {
        if (getWeekNumber(day) % 2 == 0) {
            output.innerHTML= minus;
        } else {
            output.innerHTML = plus;
        }
    } else {
        if (getWeekNumber(day) % 2 == 0) {
            output.innerHTML = plus;
        } else {
            output.innerHTML = minus;
        }
    }
}

// Content on start
window.onload = () => {
    const today = new Date();
    // console.log(today.toString());
    getWeekType(getFirstSep(today), today);
}

// Updating status
setInterval(() => {
    const today = new Date();
    // console.log(today.toString());
    getWeekType(getFirstSep(today), today);
}, 1000);
