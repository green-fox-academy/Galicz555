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
  name: string;
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.weatherService.getWeather(this.name).subscribe(all => {
      this.all = [all];
    });
  }

  constructor(private weatherService: weatherService) {
  }

  ngOnInit() {
    this.weatherService.getWeathers().subscribe(list => {
      this.list = list;
    });
  }


}
