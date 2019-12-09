import { weatherService } from './../services/get-weather.service';
import { modelForWeather } from './../models/item';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  all: modelForWeather[];
  list: modelForWeather[];
  cityName: string;
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.weatherService.getWeather(this.cityName).subscribe(all => {
      this.all = [all];
    });
  }

  constructor(private weatherService: weatherService) {
    this.cityName = "London";
    this.submitted = false;
    this.all = [];
    this.list = [];
  }

  ngOnInit() {
    this.weatherService.getWeathers().subscribe(list => {
      this.list = list;
    });
  }
}
