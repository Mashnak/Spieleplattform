import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpileComponent } from './cardpile.component';

describe('CardpileComponent', () => {
  let component: CardpileComponent;
  let fixture: ComponentFixture<CardpileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardpileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardpileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
