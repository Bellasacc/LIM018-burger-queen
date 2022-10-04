import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ModalMessageComponent } from './modal-message.component';

describe('ModalMessageComponent', () => {
  let component: ModalMessageComponent;
  let fixture: ComponentFixture<ModalMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('showModal al ejecutarse, el dialog deberia tener el metodo showModal', fakeAsync(() => {
    let dialog = fixture.debugElement.query(By.css('dialog')).nativeElement;
    component.showModal();
    expect(typeof dialog.showModal).toBe('function');
  }));

  it('closeModal al ejecutarse, el dialog deberia tener el metodo showClose', fakeAsync(() => {
    let dialog = fixture.debugElement.query(By.css('dialog')).nativeElement;
    
    component.message.content = '¡Envío de pedido exitoso!';
    fixture.detectChanges();
    tick();

    expect(fixture.debugElement.query(By.css('p')).nativeElement.textContent).toBe('¡Envío de pedido exitoso!');
    
    component.closeModal();
    expect(typeof dialog.close).toBe('function');
  }));
});
