import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ModalBurgerComponent } from './modal-burger.component';

describe('ModalBurgerComponent', () => {
  let component: ModalBurgerComponent;
  let fixture: ComponentFixture<ModalBurgerComponent>;
  const extras: Array<any> = [
    {name: 'Queso', id: '1', price: 1, select: true, img: 'https://raw.githubusercontent.com/Bellasacc/LIM018-burger-queen/main/src/assets/img/cheese.png'}, 
    {name: 'Huevo', id: '2', price: 1, select: false, img: 'https://raw.githubusercontent.com/Bellasacc/LIM018-burger-queen/main/src/assets/img/egg.png'}
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBurgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBurgerComponent);
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

  it('closeModal al ejecutarse, el dialog deberia tener el metodo close', fakeAsync(() => {
    let dialog = fixture.debugElement.query(By.css('dialog')).nativeElement;

    component.extras = extras;
    expect(component.extras[0].select).toBe(true);
    
    fixture.detectChanges();
    tick();
    
    component.closeModal();
    expect(typeof dialog.close).toBe('function');
  }));

  it('debería cambiar la propiedad select si el item está seleccionado', fakeAsync(() => {
    let input = fixture.debugElement.query(By.css('input')).nativeElement;

    input.dispatchEvent(new Event('change'));

    component.extras = extras;
    
    fixture.detectChanges();
    tick();
    
    expect(component.extras[0].select).toBe(true);
  }));
  
});
