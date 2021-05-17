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
  players = [{
    id: 1,
    name: 'player1',
    color: 'red',
    score: 44,
    active: true
  },
    {
      id: 2,
      name: 'player2',
      color: 'blue',
      score: 22,
      active: false
    },
    {
      id: 3,
      name: 'player3',
      color: 'green',
      cards: [{
        value: 5,
        turned: true
      }],
      score: 111,
      active: false
    }]

  constructor(private rules: RulesOfTheGameService) {

  }

  /**
   * Function
   */
  ngOnInit(): void {
    for (let i = 0; i < 150; i++) {
      if (i < 5) {
        this.cards.push({id:i, value: -2, color:'dodgerblue', turned: false});
      }else if (i < 15) {
        this.cards.push({id:i, value: -1,color:'dodgerblue', turned: false});
      } else if (i < 30) {
        this.cards.push({id:i, value: 0, color:'aqua', turned: false});
      } else {
        this.cards.push({id:i, value: Math.floor((i- 20) /10),
          color:((Math.floor((i- 20) /10))<5?'greenyellow':(Math.floor((i- 20) /10))<9?'yellow':'red'), turned: false});
      }
    }
    console.log('Initialization of the card deck', this.cards);
  }
}
