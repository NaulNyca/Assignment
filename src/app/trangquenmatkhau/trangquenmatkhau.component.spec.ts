import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangquenmatkhauComponent } from './trangquenmatkhau.component';

describe('TrangquenmatkhauComponent', () => {
  let component: TrangquenmatkhauComponent;
  let fixture: ComponentFixture<TrangquenmatkhauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangquenmatkhauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangquenmatkhauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
