import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherItemComponent } from './city-weather-item.component';

describe('CityWeatherItemComponent', () => {
  let component: CityWeatherItemComponent;
  let fixture: ComponentFixture<CityWeatherItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityWeatherItemComponent ]
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
