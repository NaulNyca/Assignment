import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangthitracnghiemComponent } from './trangthitracnghiem.component';

describe('TrangthitracnghiemComponent', () => {
  let component: TrangthitracnghiemComponent;
  let fixture: ComponentFixture<TrangthitracnghiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangthitracnghiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangthitracnghiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
