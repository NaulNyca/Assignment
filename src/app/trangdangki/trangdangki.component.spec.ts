import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangdangkiComponent } from './trangdangki.component';

describe('TrangdangkiComponent', () => {
  let component: TrangdangkiComponent;
  let fixture: ComponentFixture<TrangdangkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangdangkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangdangkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
