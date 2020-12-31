import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineDocking3Component } from './online-docking3.component';

describe('OnlineDocking3Component', () => {
  let component: OnlineDocking3Component;
  let fixture: ComponentFixture<OnlineDocking3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineDocking3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineDocking3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
