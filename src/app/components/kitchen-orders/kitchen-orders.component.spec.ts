import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenOrdersComponent } from './kitchen-orders.component';

describe('KitchenOrdersComponent', () => {
  let component: KitchenOrdersComponent;
  let fixture: ComponentFixture<KitchenOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
