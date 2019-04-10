import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenMastersComponent } from './screen-masters.component';

describe('ScreenMastersComponent', () => {
  let component: ScreenMastersComponent;
  let fixture: ComponentFixture<ScreenMastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenMastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
