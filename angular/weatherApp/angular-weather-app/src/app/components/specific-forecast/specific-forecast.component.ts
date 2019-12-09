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
  @Input() element: modelForWeather;

  constructor(  private route: ActivatedRoute,
    private router: Router,
    private service: weatherService) { }

  ngOnInit() {
    this.element = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.hourlyCast(params.get('id')))
    );
  }

}
