import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { iCard } from '../../../interfaces/icard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card!: iCard;
  @Output() onTurnCard: EventEmitter<iCard> = new EventEmitter();

  constructor() { }

  ngOnInit = (): void => {
  };

  onTurn = (card: iCard) => {
    this.onTurnCard.emit(card);
  };
}
