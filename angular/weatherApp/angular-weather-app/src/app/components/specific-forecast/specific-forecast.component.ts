import { environment } from './../../../environments/environment.prod';
import { weatherService } from './../../services/get-weather.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { modelForWeather } from './../../models/item';

@Component({
  selector: 'app-specific-forecast',
  templateUrl: './specific-forecast.component.html',
  styleUrls: ['./specific-forecast.component.css']
})
export class SpecificForecastComponent implements OnInit {
  selectedId: any;
  cityName: string;
  list: any;

  constructor(  private route: ActivatedRoute,
    private router: Router,
    private service: weatherService) { }

  ngOnInit() {
    this.selectedId = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        params.get('id'))
    );

    this.service.hourlyCast(this.selectedId.destination.destination._value.id).subscribe(response => {
      this.list = response['list'];
      this.cityName = response['city'].name;
    })
  }

}
