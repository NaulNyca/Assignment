import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangdoimatkhauComponent } from './trangdoimatkhau.component';

describe('TrangdoimatkhauComponent', () => {
  let component: TrangdoimatkhauComponent;
  let fixture: ComponentFixture<TrangdoimatkhauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangdoimatkhauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangdoimatkhauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
