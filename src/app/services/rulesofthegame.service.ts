import {Injectable} from '@angular/core';
import {iPlayer} from '../../interfaces/iplayer';
import {iCard} from '../../interfaces/icard';

@Injectable({
  providedIn: 'root'
})
export class RulesOfTheGameService {

  constructor() {
  }

  /**
   * Function that checks if a player on the board already reached a score of over 100 and therefore has lost the game.
   * Returns a player object
   * @param players is a array of objects by type iPlayer
   */
  checkEndOfGame: (players: iPlayer[]) => (boolean) = (players: iPlayer[]) => {
    for (let i = 0; i < players.length; i++) {
      if (players[i].score > 100) {
        return true;
      }
    }
    return false;
  }

  /**
   *
   * @param players
   */
  // TODO: Add functionality to return more than 1 player as the winning player. Maybe 2 or more players have the same minimum score
  checkWinningPlayer: (players: iPlayer[]) => iPlayer = (players: iPlayer[]) => {
    let lowestScorePlayer: iPlayer = players[0];
    for (let i = 1; i < players.length - 1; i++) {
      if (lowestScorePlayer.score > players[i].score) {
        lowestScorePlayer = players[i];
      }
    }
    return lowestScorePlayer;
  }

  /**
   *
   * @param cards
   */
  checkCardValues: (cards: iCard[]) => number = (cards: iCard[]) => {
    let valueOfAllCards: number = 0;
    for (let i = 0; i < cards.length; i++) {
      if(cards[i].turned) {
        valueOfAllCards += cards[i].value;
      }
    }
    return valueOfAllCards;
  }

  /**
   *
   * @param cards
   */
  deleteColumnOfCards: (cards: iCard[]) => iCard[] = (cards: iCard[]) => {
    let matching_row: number = this.checkColumnForMatchingCards(cards);
/*    console.log('matching_row', matching_row);*/
    if(matching_row === -1) {
      return cards;
    }
    if(cards[matching_row].turned && cards[matching_row+cards.length/3].turned && cards[matching_row+cards.length*2/3].turned)
    for (let i = 0; i < 3; i++) {
      cards.splice(matching_row + i*3, 1);
    }
/*    console.log(cards);*/
    return cards;
  }

  checkEndOfRound: (cards:iCard[]) => boolean = (cards: iCard[]) => {
    for (let i = 0; i < cards.length; i++) {
      if (!cards[i].turned) {
        return false;
      }
    }
    return true;
  }

  /**
   *
   * @param cards
   */
  private checkColumnForMatchingCards: (cards: iCard[]) => number = (cards: iCard[]) => {
    let columns: number = cards.length / 3;
/*    console.log('column', columns);*/
    for (let i = 0; i < columns; i++) {
/*      console.log(cards[i].value, cards[i+columns].value, cards[i+2*columns].value);*/
      if (cards[i].value === cards[i+columns].value && cards[i].value === cards[i+2*columns].value && cards[i+columns].value === cards[i+2*columns].value) {
        return i;
      }
    }
    return -1;
  }
}
