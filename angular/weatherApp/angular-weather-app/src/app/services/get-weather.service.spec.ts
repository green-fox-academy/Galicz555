import { TestBed } from '@angular/core/testing';

import { weatherService } from './get-weather.service';

describe('GetWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: weatherService = TestBed.get(weatherService);
    expect(service).toBeTruthy();
  });
});
