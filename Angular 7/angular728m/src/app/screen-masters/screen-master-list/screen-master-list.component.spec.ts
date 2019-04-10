import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenMasterListComponent } from './screen-master-list.component';

describe('ScreenMasterListComponent', () => {
  let component: ScreenMasterListComponent;
  let fixture: ComponentFixture<ScreenMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
