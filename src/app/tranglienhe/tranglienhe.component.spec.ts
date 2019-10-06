import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranglienheComponent } from './tranglienhe.component';

describe('TranglienheComponent', () => {
  let component: TranglienheComponent;
  let fixture: ComponentFixture<TranglienheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranglienheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranglienheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
