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
   * test
   * @param players test
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
}
