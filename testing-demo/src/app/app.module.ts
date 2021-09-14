import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TypedTextSummaryPipe} from './exercises/1- text-summary-pipe/typed-text-summary.pipe';
import {TextSummaryPipe} from "./exercises/1- text-summary-pipe/text-summary.pipe";
import {LikeComponent} from "./exercises/2- like-component/like.component";
import {VoterComponent} from "./exercises/3- voter-component/voter.component";
import {Voter2Component} from "./part2/1-voter/voter2.component";

@NgModule({
  declarations: [
    AppComponent,
    TextSummaryPipe,
    TypedTextSummaryPipe,
    LikeComponent,
    VoterComponent,
    Voter2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
