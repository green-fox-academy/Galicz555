import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

import { WeatherByPlace } from '../models/weatherByPlace';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {
  weathersUrl: string = 'http://api.openweathermap.org/data/2.5/group?id=5809844,5162774,6356055,2643743,3054643&units=metric&APPID=99e6d0a05cfd3004b8b02a9ddfafa8b7';
  weatherUrl: string = 'http://api.openweathermap.org/data/2.5/weather?id=5809844&units=metric&APPID=99e6d0a05cfd3004b8b02a9ddfafa8b7'

  constructor(private http: HttpClient) { }

  getWeathers(): Observable<WeatherByPlace[]> {
    /*return new Observable((observe) => {
      
      this.http.get<WeatherByPlace[]>(this.weathersUrl)
      // here I have an observable
      .subscribe(weatherByPlaces => {
        const thingINeed = weatherByPlaces['list'];
        //this is where i send the data back o the caller
        observe.next(thingINeed);
        //obeserve.complete()
      })
    });*/
    return this.http
              .get<WeatherByPlace[]>(this.weathersUrl)
              .pipe(map(
                (result) => {return result['list']}
              ));
  }

  getWeather(): Observable<WeatherByPlace[]> {
    return this.http.get<WeatherByPlace[]>(this.weatherUrl);
  }
}

