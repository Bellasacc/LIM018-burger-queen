import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestOrderComponent } from './request-order.component';

describe('RequestOrderComponent', () => {
  let component: RequestOrderComponent;
  let fixture: ComponentFixture<RequestOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
