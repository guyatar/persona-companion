import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RESTApiService {

  API_BASE_URL: string = "http://localhost:2626/api/";
  WEATHER_API_BASE_URL: string = "http://api.openweathermap.org/data/2.5/weather";

  fetchFromApi(subUrl: string) {
    return this.httpClient.get(this.API_BASE_URL + subUrl);
  }

  fetchFromWeatherApi(subUrl: string) {
    return this.httpClient.get(this.WEATHER_API_BASE_URL + subUrl);
  }

  constructor(private httpClient: HttpClient) {
  }
}
