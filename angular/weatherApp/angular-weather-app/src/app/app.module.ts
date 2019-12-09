import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';
import { CityWeatherItemComponent } from './components/city-weather-item/city-weather-item.component';
import { CityWeatherSearchComponent } from './components/city-weather-search/city-weather-search.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SpecificForecastComponent } from './components/specific-forecast/specific-forecast.component';
import { SpecificForecastItemComponent } from './components/specific-forecast-item/specific-forecast-item.component';



@NgModule({
  declarations: [
    AppComponent,
    CityWeatherComponent,
    CityWeatherItemComponent,
    CityWeatherSearchComponent,
    SpecificForecastComponent,
    SearchFormComponent,
    SpecificForecastItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
