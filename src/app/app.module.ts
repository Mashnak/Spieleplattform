import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { BoardComponent } from './components/board/board.component';
import { PlayerComponent } from './components/player/player.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { GameComponent } from './components/game/game.component';
import { CardpileComponent } from './components/cardpile/cardpile.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BoardComponent,
    PlayerComponent,
    ScoreboardComponent,
    GameComponent,
    CardpileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
