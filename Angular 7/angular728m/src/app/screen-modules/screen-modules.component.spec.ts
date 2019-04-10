import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenModulesComponent } from './screen-modules.component';

describe('ScreenModulesComponent', () => {
  let component: ScreenModulesComponent;
  let fixture: ComponentFixture<ScreenModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
