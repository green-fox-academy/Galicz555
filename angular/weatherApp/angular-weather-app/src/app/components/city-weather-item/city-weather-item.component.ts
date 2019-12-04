import { WeatherByPlace } from './../../models/weatherByPlace';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city-weather-item',
  templateUrl: './city-weather-item.component.html',
  styleUrls: ['./city-weather-item.component.css']
})
export class CityWeatherItemComponent implements OnInit {
  @Input() weatherByPlace: WeatherByPlace;

  constructor() { }

  ngOnInit() {
  }

}
