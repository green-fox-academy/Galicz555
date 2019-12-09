import { modelForWeather } from './../models/item';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



import { weatherService } from './get-weather.service';

// describe('GetWeatherService', () => {
//   beforeEach(() => TestBed.configureTestingModule({
//   }));

//   it('should be created', () => {
//     const service: weatherService = TestBed.get(weatherService);
//     expect(service).toBeTruthy();
//   });
// });

describe('HttpClient testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });
  /// Tests begin ///

  it('can test HttpClient.get', () => {
    const testData: modelForWeather = { };
  
    // Make an HTTP GET request
    httpClient.get<modelForWeather>('http://api.openweathermap.org/data/2.5/weather?q=&units=metric&APPID=99e6d0a05cfd3004b8b02a9ddfafa8b7')
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toEqual(testData)
      );
  
    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne('http://api.openweathermap.org/data/2.5/weather?q=&units=metric&APPID=99e6d0a05cfd3004b8b02a9ddfafa8b7');
  
    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');
  
    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);
  
    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

  it('can test for 404 error', () => {
    const emsg = 'deliberate 404 error';
  
    httpClient.get<modelForWeather[]>('http://api.openweathermap.org/data/2.5/weather?q=&units=metric&APPID=99e6d0a05cfd3004b8b02a9ddfafa8b7').subscribe(
      data => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );
  
    const req = httpTestingController.expectOne('http://api.openweathermap.org/data/2.5/weather?q=&units=metric&APPID=99e6d0a05cfd3004b8b02a9ddfafa8b7');
  
    // Respond with mock error
    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  });
});

describe('weatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [weatherService]
    });
  });

  it('should get cityWeather', () => {
    const testUrl = "http://api.openweathermap.org/data/2.5/weather?q=&units=metric&APPID=99e6d0a05cfd3004b8b02a9ddfafa8b7";
    const cityName = "London";
    const leech = TestBed.get(weatherService);
    const http = TestBed.get(HttpTestingController);
    let weatherResponse;

    leech.getWeather(cityName).subscribe((response) => {
      weatherResponse = [response]
      console.log(weatherResponse)
    });

    console.log(weatherResponse)
    http.expectOne("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=99e6d0a05cfd3004b8b02a9ddfafa8b7").flush(cityName);
    expect(weatherResponse.name).toEqual(cityName);
  })
});
