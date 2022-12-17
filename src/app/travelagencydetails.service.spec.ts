import { TestBed } from '@angular/core/testing';

import { TravelagencydetailsService } from './travelagencydetails.service';

describe('TravelagencydetailsService', () => {
  let service: TravelagencydetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelagencydetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
