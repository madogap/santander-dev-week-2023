import { TestBed } from '@angular/core/testing';

import { ContaResolver } from './conta.resolver';

describe('ContaResolver', () => {
  let resolver: ContaResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ContaResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
