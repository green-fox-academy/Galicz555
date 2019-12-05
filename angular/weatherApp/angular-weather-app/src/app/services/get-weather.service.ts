import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { modelForWeather } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class weatherService {

  constructor(private http: HttpClient) { }

  getWeathers(): Observable<modelForWeather[]> {
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
      .get<modelForWeather[]>(environment.weathersUrl)
      .pipe(map(
        (result) => { return result['list'] }
      ));
  }

  getWeather(cityName): Observable<modelForWeather> {
    return this.http
      .get<modelForWeather>(environment.weatherUrlName + cityName + environment.weatherUnits + environment.weatherApiKey)
      .pipe(map(
        (result) => { return result }
      ));
  }
}