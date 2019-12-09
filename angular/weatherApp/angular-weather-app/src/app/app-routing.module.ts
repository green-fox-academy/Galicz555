import { SpecificForecastComponent } from './components/specific-forecast/specific-forecast.component';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [  { path: '', component: CityWeatherComponent },
{ path: 'dashboard', component: CityWeatherComponent },
{ path: 'dashboard/:id', component: SpecificForecastComponent },
{ path: ':id', component: SpecificForecastComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
