import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BurgerService } from 'src/app/services/burger.service';

import { KitchenOrdersComponent } from './kitchen-orders.component';

describe('KitchenOrdersComponent', () => {
  let component: KitchenOrdersComponent;
  let fixture: ComponentFixture<KitchenOrdersComponent>;
  const serviceStub = {
    getOrders: (status: string) =>
      of([{ id: '', status: status }]),
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenOrdersComponent ],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [{ provide: BurgerService, useValue: serviceStub }],
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
