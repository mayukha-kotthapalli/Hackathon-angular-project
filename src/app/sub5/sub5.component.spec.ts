import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub5Component } from './sub5.component';

describe('Sub5Component', () => {
  let component: Sub5Component;
  let fixture: ComponentFixture<Sub5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sub5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sub5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
