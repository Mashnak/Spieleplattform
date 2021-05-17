import { TestBed } from '@angular/core/testing';

import { RulesOfTheGameService } from './rulesofthegame.service';

describe('RulesOfTheGameService', () => {
  let service: RulesOfTheGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RulesOfTheGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
