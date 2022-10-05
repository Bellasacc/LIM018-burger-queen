import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
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
  })
});
