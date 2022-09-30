import { TestBed } from '@angular/core/testing';
import { Firestore } from '@angular/fire/firestore';

import { BurgerService } from './burger.service';

describe('BurgerService', () => {
  let service: BurgerService;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [{ provide: Firestore, useValue: {}}],
    });
    service = TestBed.inject(BurgerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
