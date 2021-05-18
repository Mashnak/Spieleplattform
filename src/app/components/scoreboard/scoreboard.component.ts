import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
