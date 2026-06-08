import { TestBed } from '@angular/core/testing';

import { Volunteering } from './volunteering';

describe('Volunteering', () => {
  let service: Volunteering;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Volunteering);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
