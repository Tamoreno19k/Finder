import { TestBed } from '@angular/core/testing';

import { AuthGoogleCustomersService } from './auth-google-customers.service';

describe('AuthGoogleCustomersService', () => {
  let service: AuthGoogleCustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGoogleCustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
