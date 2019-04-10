import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenModuleComponent } from './screen-module.component';

describe('ScreenModuleComponent', () => {
  let component: ScreenModuleComponent;
  let fixture: ComponentFixture<ScreenModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
