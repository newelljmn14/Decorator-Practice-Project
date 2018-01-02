import { TestBed, inject } from '@angular/core/testing';

import { ListDataFactoryService } from './list-data-factory.service';

describe('ListDataFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListDataFactoryService]
    });
  });

  it('should be created', inject([ListDataFactoryService], (service: ListDataFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
