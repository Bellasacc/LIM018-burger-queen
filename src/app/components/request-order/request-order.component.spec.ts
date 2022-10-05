import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BurgerService } from 'src/app/services/burger.service';

import { RequestOrderComponent } from './request-order.component';

describe('RequestOrderComponent', () => {
  let component: RequestOrderComponent;
  let fixture: ComponentFixture<RequestOrderComponent>;
  let fakeActivatedRoute = {
    queryParams: of({ data: '123' }),
  };
  const serviceStub = {
    getMenu: () => {
      const todos = [{id: '1', description: '', price: 5}];
      return of(todos);
    }
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestOrderComponent ],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [{ provide: BurgerService, useValue: serviceStub }, { provide: ActivatedRoute, useValue: fakeActivatedRoute }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestOrderComponent);
    component = fixture.componentInstance;
    
    spyOn(serviceStub, 'getMenu').and.returnValue(of([{ id: '1', description: '', price: 5 }]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verificar llamada de la funcion getMenu', () => {
    expect(serviceStub.getMenu).toHaveBeenCalled();
  });

  describe('addItem', () => {

    it('debería añadir items al array del pedido', fakeAsync(() => {
      let item = { id: '1', description: 'Jugo de frutas', price: 16, amount: 1}
      component.addItem(item)    
      fixture.detectChanges();
      tick();

      expect(component.items.length).toBe(1);
    }));

    it('debería añadir items al array del pedido', fakeAsync(() => {
      let item = { id: '1', description: 'Jugo de frutas', price: 10, amount: 0};
      let item2 = { id: '2', description: 'Cafe con leche', price: 10, amount: 0};
      component.addItem(item);    
      fixture.detectChanges();
      tick();
      component.addItem(item);
      component.addItem(item2);
      component.addItem(item);
      expect(component.items[0].amount).toBe(3);
      expect(component.items[1].amount).toBe(1);
      expect(component.total).toBe(40);
    }));

  });

  describe('onDeleteItem', () => {

    it('debería eliminar items del array del pedido', fakeAsync(() => {
      let item = { id: '1', description: 'Jugo de frutas', price: 10, amount: 1};
      let items = [
        { id: '1', description: 'Jugo de frutas', price: 10, amount: 2},
        { id: '2', description: 'Cafe con leche', price: 10, amount: 1}
      ];
      component.items = items;
      component.onDeleteItem(item);    
      fixture.detectChanges();
      tick();

      expect(component.items[0].amount).toBe(1);
      expect(component.total).toBe(20);
    }));

    // it('debería añadir items al array del pedido', fakeAsync(() => {
    //   let item = { id: '1', description: 'Jugo de frutas', price: 10, amount: 0}
    //   let item2 = { id: '2', description: 'Cafe con leche', price: 10, amount: 0}
    //   component.addItem(item);    
    //   fixture.detectChanges();
    //   tick();
    //   component.addItem(item);
    //   component.addItem(item2);
    //   component.addItem(item);
    //   expect(component.items[0].amount).toBe(3);
    //   expect(component.items[1].amount).toBe(1);
    //   expect(component.total).toBe(40);
    // }));

  });
  
  
});
