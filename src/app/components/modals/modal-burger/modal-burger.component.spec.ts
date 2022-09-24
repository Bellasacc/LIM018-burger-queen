import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBurgerComponent } from './modal-burger.component';

describe('ModalBurgerComponent', () => {
  let component: ModalBurgerComponent;
  let fixture: ComponentFixture<ModalBurgerComponent>;

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
});
