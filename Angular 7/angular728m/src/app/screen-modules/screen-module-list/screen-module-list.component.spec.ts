import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenModuleListComponent } from './screen-module-list.component';

describe('ScreenModuleListComponent', () => {
  let component: ScreenModuleListComponent;
  let fixture: ComponentFixture<ScreenModuleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenModuleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenModuleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
