import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranghoidapComponent } from './tranghoidap.component';

describe('TranghoidapComponent', () => {
  let component: TranghoidapComponent;
  let fixture: ComponentFixture<TranghoidapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranghoidapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranghoidapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
