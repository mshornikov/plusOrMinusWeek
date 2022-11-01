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

// Plus or Minus
function getWeekType(firstSep, day) {
    if (getWeekNumber(firstSep) % 2 == 0) {
        if (getWeekNumber(day) % 2 == 0) {
            output.dataset.status = '-';
        } else {
            output.dataset.status = '+';
        }
    } else {
        if (getWeekNumber(day) % 2 == 0) {
            output.dataset.status = '+';
        } else {
            output.dataset.status = '-';
        }
    }
}

// Content on start
window.onload = () => {
    const today = new Date();
    console.log(today.toString());
    getWeekType(getFirstSep(today), today);
    output.innerHTML = output.dataset.status;
}

// Updating status
setInterval(() => {
    const today = new Date();
    console.log(today.toString());
    getWeekType(getFirstSep(today), today);
    output.innerHTML = output.dataset.status;
    
}, 1000);
