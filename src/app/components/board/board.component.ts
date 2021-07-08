import {Component, OnInit} from '@angular/core';
import {RulesOfTheGameService} from '../../services/rulesofthegame.service';
import {iCard} from '../../../interfaces/icard';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  cards: iCard[] = [];
  poppedCard!: iCard | undefined;

  constructor(private rules: RulesOfTheGameService) {

  }

  /**
   * Function
   */
  ngOnInit(): void {
    for (let i = 0; i < 150; i++) {
      if (i < 5) {
        this.cards.push({id: i, value: -2, color: 'dodgerblue', turned: false});
      } else if (i < 15) {
        this.cards.push({id: i, value: -1, color: 'dodgerblue', turned: false});
      } else if (i < 30) {
        this.cards.push({id: i, value: 0, color: 'aqua', turned: false});
      } else {
        this.cards.push({
          id: i,
          value: Math.floor((i - 20) / 10),
          color: ((Math.floor((i - 20) / 10)) < 5 ? 'greenyellow' : (Math.floor((i - 20) / 10)) < 9 ? 'yellow' : 'red'),
          turned: false
        });
      }
    }
    this.shuffleArray(this.cards);
  }

  /**
   * Randomize array in-place using Durstenfeld shuffle algorithm
   * @param array
   */
  shuffleArray(array: iCard[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  popLastCard(card: iCard) {
  this.cards.pop();
    card.turned = true;
    this.poppedCard = card;
    console.log(this.poppedCard);
  }
}
