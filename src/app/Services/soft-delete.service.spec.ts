import { TestBed } from '@angular/core/testing';

import { SoftDeleteService } from './soft-delete.service';

describe('SoftDeleteService', () => {
  let service: SoftDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
