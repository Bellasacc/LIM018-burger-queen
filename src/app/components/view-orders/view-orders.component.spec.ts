import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BurgerService } from 'src/app/services/burger.service';

import { ViewOrdersComponent } from './view-orders.component';

describe('ViewOrdersComponent', () => {
  let component: ViewOrdersComponent;
  let fixture: ComponentFixture<ViewOrdersComponent>;
  const serviceStub = {
    getOrders: (status: string) =>
      of([{ id: '', status: status }]),
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrdersComponent ],
      providers: [{ provide: BurgerService, useValue: serviceStub }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
