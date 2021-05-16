import { TestBed } from '@angular/core/testing';

import { RulesofthegameService } from './rulesofthegame.service';

describe('RulesofthegameService', () => {
  let service: RulesofthegameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RulesofthegameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
