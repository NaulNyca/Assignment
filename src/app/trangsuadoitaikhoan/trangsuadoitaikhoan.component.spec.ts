import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangsuadoitaikhoanComponent } from './trangsuadoitaikhoan.component';

describe('TrangsuadoitaikhoanComponent', () => {
  let component: TrangsuadoitaikhoanComponent;
  let fixture: ComponentFixture<TrangsuadoitaikhoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangsuadoitaikhoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangsuadoitaikhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
