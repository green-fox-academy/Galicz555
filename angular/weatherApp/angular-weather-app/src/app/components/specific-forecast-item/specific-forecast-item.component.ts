import { modelForWeather } from './../../models/item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-specific-forecast-item',
  templateUrl: './specific-forecast-item.component.html',
  styleUrls: ['./specific-forecast-item.component.css']
})
export class SpecificForecastItemComponent implements OnInit {
  @Input() element: modelForWeather;

  constructor() { }

  ngOnInit() {
  }

}
