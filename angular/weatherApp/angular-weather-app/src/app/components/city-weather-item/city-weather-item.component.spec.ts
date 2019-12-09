import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherItemComponent } from './city-weather-item.component';
import { CityWeatherSearchComponent } from '../city-weather-search/city-weather-search.component';

describe('CityWeatherItemComponent', () => {
  let component: CityWeatherItemComponent;
  let fixture: ComponentFixture<CityWeatherItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CityWeatherItemComponent,
        CityWeatherSearchComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
