import { Injectable } from '@angular/core';
import { WeatherService } from '../weather/weather.service';

@Injectable()
export class DailyInfoService {

  weekdays: any = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  getPartOfDay(date: Date) {
    var hour: number = date.getHours();

    if (hour >= 5 && hour < 12)
      return "Morning";
    else if (hour < 18)
      return "Afternoon";
    else if (hour >= 18 && hour < 24)
      return "Evening";
    else return "Night";
  }

  getShortDateString(date: Date) {
    var month = date.getMonth() + 1;
    var strMonth: string = (month > 9) ? month.toString() : "0" + month;
    return date.getDate() + '/' + strMonth;
  }

  getDailyInfo() {
    var currentDate: Date = new Date()

    return {
      PartOfDay: this.getPartOfDay(currentDate),
      DayOfWeek: this.weekdays[currentDate.getDay()],
      DateDescription: this.getShortDateString(currentDate)
    };
  }

  constructor() { }

}