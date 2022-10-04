import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { RequestNameClientComponent } from './request-name-client.component';

describe('RequestNameClientComponent', () => {
  let component: RequestNameClientComponent;
  let fixture: ComponentFixture<RequestNameClientComponent>;
  let fakeRoute = {
    queryParams: of({ data: 'Maria' }),
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ RequestNameClientComponent ],
      providers: [{ provide: Router, useValue: fakeRoute }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestNameClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('onNext', () => {
    it('Si el input esta vacio al dar click debe mostrar mensaje "*Ingresa nombre del cliente"', fakeAsync(() => {
      let input = fixture.debugElement.query(By.css('input')).nativeElement;
  
      fixture.detectChanges();
      tick();
      expect(component.name).toBeFalsy();
  
      input.value = '';
      input.dispatchEvent(new Event('input'));
      tick();
      fixture.detectChanges();
      expect(component.name).toBe('');

      let btn = fixture.debugElement.query(By.css('button')).nativeElement;
      btn.dispatchEvent(new Event('click'));
      tick();
      fixture.detectChanges();
      expect(component.message).toBe('*Ingresa nombre del cliente');
      
    }));
    it('Si el input contiene un nombre debe cambiar de ruta', fakeAsync(() => {
      let input = fixture.debugElement.query(By.css('input')).nativeElement;
  
      fixture.detectChanges();
      tick();
      expect(component.name).toBeFalsy();
  
      input.value = 'Maria';
      input.dispatchEvent(new Event('input'));
      tick();
      fixture.detectChanges();
      expect(component.name).toBe('Maria');

      let btn = fixture.debugElement.query(By.css('button')).nativeElement;
      btn.dispatchEvent(new Event('click'));
      tick();
      fixture.detectChanges();
      
    }));
  });
});
