import { Injectable } from '@angular/core';
import { RESTApiService } from '../rest-api/rest-api.service';

@Injectable()
export class WeatherService {

  private _apiKey: string = "6099db52094a6411fbdad38454ae70d6";
  private _city: string = "tel aviv";
  private _country: string = "il";

  GetCurrentWeather() {
    var formattedSubUrl: string = `?q=${this._city},${this._country}&units=metric&appid=${this._apiKey}`;
    return this.restApi.fetchFromWeatherApi(formattedSubUrl);
  }

  constructor(private restApi: RESTApiService) { }

}