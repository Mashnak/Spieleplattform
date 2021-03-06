import {Component, OnInit} from '@angular/core';
import {BoardComponent} from '../board/board.component';
import {iCard} from '../../../interfaces/icard';
import {RulesOfTheGameService} from '../../services/rulesofthegame.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {


  player_cards: iCard[] = [];

  constructor(private board: BoardComponent, private rules: RulesOfTheGameService) {
  }

  ngOnInit(): void {
    for (let i = 0; i < 12; i++) {
      let random_card: number = Math.floor(Math.random() * this.board.cards.length);
      this.player_cards.push(this.board.cards[random_card]);
      this.board.cards.forEach((item, index) => {
        if (index === random_card) this.board.cards.splice(index, 1);
      });
    }
    for(let i = 0; i < 3; i++) {
      this.player_cards[2+i*4].value = 4;
    }
    this.player_cards = this.rules.deleteColumnOfCards(this.player_cards);
  }

  onClick(card: iCard) {
    card.clicked = !card.clicked;
/*    console.log('Card values', this.rules.checkCardValues(this.player_cards));*/
    this.rules.deleteColumnOfCards(this.player_cards);
  }

  onTurn(card: iCard) {
      card.turned = true;
      console.log(this.rules.checkEndOfRound(this.player_cards));
  }
}
