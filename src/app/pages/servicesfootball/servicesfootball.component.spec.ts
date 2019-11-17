import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesfootballComponent } from './servicesfootball.component';

describe('ServicesfootballComponent', () => {
  let component: ServicesfootballComponent;
  let fixture: ComponentFixture<ServicesfootballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesfootballComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesfootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
