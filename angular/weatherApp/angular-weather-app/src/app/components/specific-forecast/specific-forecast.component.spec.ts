import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificForecastComponent } from './specific-forecast.component';

describe('SpecificForecastComponent', () => {
  let component: SpecificForecastComponent;
  let fixture: ComponentFixture<SpecificForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
