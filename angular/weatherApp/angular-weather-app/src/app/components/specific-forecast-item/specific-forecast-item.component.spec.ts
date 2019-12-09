import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificForecastItemComponent } from './specific-forecast-item.component';

describe('SpecificForecastItemComponent', () => {
  let component: SpecificForecastItemComponent;
  let fixture: ComponentFixture<SpecificForecastItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificForecastItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificForecastItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
