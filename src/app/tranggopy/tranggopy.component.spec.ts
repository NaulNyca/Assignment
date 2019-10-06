import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranggopyComponent } from './tranggopy.component';

describe('TranggopyComponent', () => {
  let component: TranggopyComponent;
  let fixture: ComponentFixture<TranggopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranggopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranggopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
