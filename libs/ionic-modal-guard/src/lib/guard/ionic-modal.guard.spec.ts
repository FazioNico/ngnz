import { TestBed } from '@angular/core/testing';

import { IonicModalGuard } from './ionic-modal.guard';

describe('IonicModalGuard', () => {
  let guard: IonicModalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IonicModalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
