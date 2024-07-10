import { TestBed } from '@angular/core/testing';
import { GetUnitsService } from './get-units.service';

describe('GetUnitsService', () => {
  let service: GetUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [GetUnitsService] });
    service = TestBed.inject(GetUnitsService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
