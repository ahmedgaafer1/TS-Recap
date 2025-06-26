"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays["Sunday"] = "Sunday";
    WeekDays["Monday"] = "Monday";
    WeekDays["Tuesday"] = "Tuesday";
    WeekDays["Wednesday"] = "Wednesday";
    WeekDays["Thursday"] = "Thursday";
    WeekDays["Friday"] = "Friday";
    WeekDays["Saturday"] = "Saturday";
})(WeekDays || (WeekDays = {}));
function isWeekend(day) {
    return day === WeekDays.Friday || day === WeekDays.Saturday;
}
console.log(isWeekend(WeekDays.Friday));
console.log(isWeekend(WeekDays.Saturday));
console.log(isWeekend(WeekDays.Monday));
