import { TestBed } from '@angular/core/testing';
import { MethodsFilter } from './methods-filter.service';

describe('MethodsFilter', () => {
  let service: MethodsFilter;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [MethodsFilter] });
    service = TestBed.inject(MethodsFilter);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`resultadosCount has default value`, () => {
    expect(service.resultadosCount).toEqual(0);
  });
});
