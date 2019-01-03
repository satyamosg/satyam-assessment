import { TestBed } from '@angular/core/testing';

import { PresentsService } from './presents.service';

describe('PresentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresentsService = TestBed.get(PresentsService);
    expect(service).toBeTruthy();
  });
});
