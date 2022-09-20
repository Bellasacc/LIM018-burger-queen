import { TestBed } from '@angular/core/testing';

import { BurgerService } from './burger.service';

describe('BurgerService', () => {
  let service: BurgerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BurgerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
