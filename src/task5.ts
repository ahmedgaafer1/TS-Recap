enum WeekDays {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}

function isWeekend(day: WeekDays): boolean {
  return day === WeekDays.Friday || day === WeekDays.Saturday;
}

console.log(isWeekend(WeekDays.Friday));
console.log(isWeekend(WeekDays.Saturday));
console.log(isWeekend(WeekDays.Monday));
