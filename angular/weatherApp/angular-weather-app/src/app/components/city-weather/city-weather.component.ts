import { Component, OnInit } from '@angular/core';
import { modelForWeather } from '../../models/item';
import { weatherService } from "../../services/get-weather.service"

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {
  list:modelForWeather[]

  constructor(private weatherService:weatherService) { }

  ngOnInit() {
    this.weatherService.getWeathers().subscribe(list => {
      this.list = list;
    });
  }

}
