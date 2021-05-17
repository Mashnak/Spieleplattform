import {iCard} from './icard';

export interface iPlayer {
  id?: number;
  name: string;
  color: string;
  score: number;
  cards?: iCard[];
  active: boolean;
}
