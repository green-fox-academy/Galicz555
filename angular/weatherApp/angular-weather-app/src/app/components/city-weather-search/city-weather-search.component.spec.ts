import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherSearchComponent } from './city-weather-search.component';

describe('CityWeatherSearchComponent', () => {
  let component: CityWeatherSearchComponent;
  let fixture: ComponentFixture<CityWeatherSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityWeatherSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
