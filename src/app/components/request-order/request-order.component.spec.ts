import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { BurgerService } from 'src/app/services/burger.service';

import { RequestOrderComponent } from './request-order.component';

describe('RequestOrderComponent', () => {
  let component: RequestOrderComponent;
  let fixture: ComponentFixture<RequestOrderComponent>;
  let fakeActivatedRoute = {
    queryParams: of({ data: '123' }),
  };
  let fakeRoute = {
    navigate: () => {}
  }
  const serviceStub = {
    getMenu: () => {
      const todos = [{id: '1', description: '', price: 5}, { id: '2', description: '', price: 5 }];
      return of(todos);
    },
    saveOrder: () => {}
  };
  const modal = { showModal: () => {} }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestOrderComponent ],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [{ provide: BurgerService, useValue: serviceStub }, { provide: ActivatedRoute, useValue: fakeActivatedRoute }, { provide: Router, useValue: fakeRoute}],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestOrderComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

  });

  describe('askIfBurger', () => {

    it('debería mostrar modal de opciones si el pedido es una hamburguesa', fakeAsync(() => {
      serviceStub.getMenu = jasmine.createSpy().and.returnValue(of([{ id: '1', description: 'Hamburguesa simple de pollo', price: 5 }, { id: '2', description: 'Hamburguesa doble de pollo', price: 5 }]));
      component.ngOnInit();
      fixture.detectChanges();
      tick();
      let divItem = fixture.debugElement.query(By.css('div[class="item"]')).nativeElement;
      component.modal.toArray()[0].showModal = modal.showModal;
      component.modal.toArray()[0].id = '1';
      
      fixture.detectChanges();
      tick();

      expect(serviceStub.getMenu).toHaveBeenCalled();
      
      divItem.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      tick();
      expect(component.modal.toArray()[0].showModal).toBeTruthy();
      
    }));

    it('debería añadir el item a la lista de pedidos si no es hamburguesa', fakeAsync(() => {
      serviceStub.getMenu = jasmine.createSpy().and.returnValue(of([{ id: '1', description: 'Jugo de frutas', price: 5 }]));
      component.ngOnInit();
      fixture.detectChanges();
      tick();
      let divItem = fixture.debugElement.query(By.css('div[class="item"]')).nativeElement;
  
      divItem.dispatchEvent(new Event('click'));
      expect(serviceStub.getMenu).toHaveBeenCalled();
    }));

  });
  
  describe('showModalMessage', () => {

    it('debería mostrar el modal con el mensaje de alerta "No has ingresado nada en la orden"', fakeAsync(() => {
      let btn = fixture.debugElement.query(By.css('button')).nativeElement;
      
      component.modalMessage.showModal = modal.showModal;
      btn.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      tick();
      component.modalMessage.message = { content: 'No has ingresado nada en la orden', img: './assets/img/warning.png'};

      expect(component.modalMessage.message.content).toBe('No has ingresado nada en la orden');
    }));

    it('debería mostrar el modal con el mensaje de alerta "¡Envío de pedido exitoso!"', fakeAsync(() => {
      let btn = fixture.debugElement.query(By.css('button')).nativeElement;
      component.items = [{ id: '1', description: 'Jugo de frutas', price: 5 }]
      component.modalMessage.showModal = modal.showModal;
      btn.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      tick();
      component.modalMessage.message = { content: '¡Envío de pedido exitoso!', img: './assets/img/warning.png'};

      expect(component.modalMessage.message.content).toBe('¡Envío de pedido exitoso!');
    }));

  });

  describe('obtainingReply', () => {

    it('debería llamar a la función saveOrder', fakeAsync(() => {
      serviceStub.saveOrder = jasmine.createSpy().and.returnValue(of({}));
      component.items = [{ id: '1', description: 'Jugo de frutas', price: 5, amount: 2 }]
      component.obtainingReply(true);
      expect(serviceStub.saveOrder).toHaveBeenCalled();
    }));

  });

  describe('obtainingData', () => {

    it('debería llamar a la función addItem', fakeAsync(() => {
      let item = { id: '1', description: 'Jugo de frutas', price: 10, amount: 1};
      component.obtainingData(item);
      
      expect(component.addItem).toBeTruthy();
    }));

  });

  it('Cuando haga click deberia remover la clase active', fakeAsync(() => {
    component.ngAfterViewInit();
    let ul = fixture.debugElement.query(By.css('ul')).nativeElement;
    let liBurgers = fixture.debugElement.query(By.css('li[id="menu-burger"]')).nativeElement;
    const event = new Event('click');
    ul.dispatchEvent(event);
    tick();
    fixture.detectChanges();
    const classLiBurgers = liBurgers.getAttribute('class');
    expect(classLiBurgers).not.toContain('active');
  }));
  
});
