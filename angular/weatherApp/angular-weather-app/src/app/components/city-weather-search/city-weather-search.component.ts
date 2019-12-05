import { modelForWeather } from './../../models/item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city-weather-search',
  templateUrl: './city-weather-search.component.html',
  styleUrls: ['./city-weather-search.component.css']
})
export class CityWeatherSearchComponent implements OnInit {
  @Input() element: modelForWeather;
  

  constructor() { }

  ngOnInit() {

  }
}
