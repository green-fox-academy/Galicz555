import { Component, OnInit } from '@angular/core';
import { WeatherByPlace } from '../../models/weatherByPlace';
import { GetWeatherService } from "../../services/get-weather.service"

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {
  weatherByPlaces:WeatherByPlace[]

  constructor(private getWeatherService:GetWeatherService) { }

  ngOnInit() {
    this.getWeatherService.getWeathers().subscribe(weatherByPlaces => {
      this.weatherByPlaces = weatherByPlaces;
    });
  }

}
