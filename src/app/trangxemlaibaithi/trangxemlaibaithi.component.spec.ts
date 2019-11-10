import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangxemlaibaithiComponent } from './trangxemlaibaithi.component';

describe('TrangxemlaibaithiComponent', () => {
  let component: TrangxemlaibaithiComponent;
  let fixture: ComponentFixture<TrangxemlaibaithiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangxemlaibaithiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangxemlaibaithiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
