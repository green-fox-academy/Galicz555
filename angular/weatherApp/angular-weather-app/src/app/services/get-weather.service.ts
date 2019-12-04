import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WeatherByPlace } from '../models/weatherByPlace';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {
  weathersUrl: string = 'http://api.openweathermap.org/data/2.5/group?id=5809844,5162774,6356055,2643743,3054643&units=metric&APPID=99e6d0a05cfd3004b8b02a9ddfafa8b7';

  constructor(private http: HttpClient) { }

  getWeathers(): Observable<WeatherByPlace[]> {
    return this.http.get<WeatherByPlace[]>(this.weathersUrl);
  }
}

