import { TestBed, inject } from '@angular/core/testing';

import { ListDataServiceService } from './list-data-service.service';

describe('ListDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListDataServiceService]
    });
  });

  it('should be created', inject([ListDataServiceService], (service: ListDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
