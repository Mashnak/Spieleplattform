import { Component, OnInit } from '@angular/core';
import { BoardComponent} from '../board/board.component';
import {iCard} from '../../../interfaces/icard';
import { RulesOfTheGameService} from '../../services/rulesofthegame.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player_cards: iCard[]= [];
  constructor(private board: BoardComponent, private rules: RulesOfTheGameService) { }

  ngOnInit(): void {
    for(let i = 0; i < 12; i++) {
      let random_card: number = Math.floor(Math.random() * this.board.cards.length);
      this.player_cards.push(this.board.cards[random_card]);
      // TODO: Delete the 12 cards that the player got from the pile of 150 game cards
    }
    console.log('12 Player cards', this.player_cards);
    console.log('All cards after the player picked 12', this.board.cards);
    console.log('Card values', this.rules.checkCardValues(this.player_cards));
  }
}
