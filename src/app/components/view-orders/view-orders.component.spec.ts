import { CUSTOM_ELEMENTS_SCHEMA, Renderer2, Type } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { BurgerService } from 'src/app/services/burger.service';

import { ViewOrdersComponent } from './view-orders.component';

describe('ViewOrdersComponent', () => {
  let component: ViewOrdersComponent;
  let fixture: ComponentFixture<ViewOrdersComponent>;
  const serviceStub = {
    getOrders: (status: string) =>
      of([{ id: '', status: status }]),
    changeStatus: () => {}
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrdersComponent ],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
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
 
  it('cuando haga click se debe actualizar el estado de la orden', fakeAsync(() => {
    let btn = fixture.debugElement.query(By.css('button')).nativeElement;
    btn.dispatchEvent(new Event('click'));
    tick();
    fixture.detectChanges();
  }));
  it('Cuando haga click deberia remover la clase active', fakeAsync(() => {
    component.ngAfterViewInit();
    let ul = fixture.debugElement.query(By.css('ul')).nativeElement;
    let liPending = fixture.debugElement.query(By.css('li[id="status-pending"]')).nativeElement;
    const event = new Event('click');
    ul.dispatchEvent(event)

    tick();
    fixture.detectChanges();
    const classLiPending = liPending.getAttribute('class');
    expect(classLiPending).not.toContain('active');
    expect(liPending.getAttribute('class')).toContain('li-status-side');
  }));
});
