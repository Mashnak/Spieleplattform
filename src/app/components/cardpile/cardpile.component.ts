import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {iCard} from '../../../interfaces/icard';

@Component({
  selector: 'app-cardpile',
  templateUrl: './cardpile.component.html',
  styleUrls: ['./cardpile.component.css']
})
export class CardpileComponent implements OnInit {
  @Input() card!: iCard;
  @Output() onClickCard: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick = () => {
    this.onClickCard.emit();
  }

}
