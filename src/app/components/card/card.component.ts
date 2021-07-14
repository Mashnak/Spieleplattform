import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { iCard } from '../../../interfaces/icard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card!: iCard;
  @Output() onClickCard: EventEmitter<iCard> = new EventEmitter<iCard>();
  @Output() onTurnCard: EventEmitter<iCard> = new EventEmitter<iCard>()

  constructor() { }

  ngOnInit = (): void => {
  };

  onClick = (card: iCard) => {
    this.onClickCard.emit(card);
  };

  onTurn = (card: iCard) => {
    this.onTurnCard.emit(card);
  }
}
