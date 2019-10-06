import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranggioithieuComponent } from './tranggioithieu.component';

describe('TranggioithieuComponent', () => {
  let component: TranggioithieuComponent;
  let fixture: ComponentFixture<TranggioithieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranggioithieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranggioithieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
