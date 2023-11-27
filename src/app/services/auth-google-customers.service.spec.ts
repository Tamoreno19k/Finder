import { TestBed } from '@angular/core/testing';

import { AuthGoogleServiceCustomers } from './auth-google-customers.service';

describe('AuthGoogleCustomersService', () => {
  let service: AuthGoogleServiceCustomers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGoogleServiceCustomers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
