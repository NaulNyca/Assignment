import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangdanhmucmonhocComponent } from './trangdanhmucmonhoc.component';

describe('TrangdanhmucmonhocComponent', () => {
  let component: TrangdanhmucmonhocComponent;
  let fixture: ComponentFixture<TrangdanhmucmonhocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangdanhmucmonhocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangdanhmucmonhocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
