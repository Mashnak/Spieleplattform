import { Component, OnInit, Input } from '@angular/core';
import { iCard } from '../../../interfaces/icard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card!: iCard;
  constructor() { }

  ngOnInit(): void {
  }

}
