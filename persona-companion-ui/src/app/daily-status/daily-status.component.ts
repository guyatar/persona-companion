import { Component, OnInit } from '@angular/core';
import { DailyInfoService } from '../services/daily-info/daily-info.service';
import { WeatherService } from '../services/weather/weather.service';

@Component({
  selector: 'app-daily-status',
  templateUrl: './daily-status.component.html',
  styleUrls: ['./daily-status.component.css']
})
export class DailyStatusComponent implements OnInit {

  dailyInfo: any;
  wheatherInfo: any = { main: { temp: null } };

  constructor(private dailyInfoService: DailyInfoService,
    private weatherService: WeatherService) {
    this.dailyInfo = dailyInfoService.getDailyInfo();
    this.weatherService.GetCurrentWeather()
      .subscribe((data) => {
        this.wheatherInfo = data;
        console.log(data);
      });
  }

  ngOnInit() {
  }

}
