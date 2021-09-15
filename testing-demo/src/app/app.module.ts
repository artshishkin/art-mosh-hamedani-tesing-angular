import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TypedTextSummaryPipe} from './exercises/1- text-summary-pipe/typed-text-summary.pipe';
import {TextSummaryPipe} from "./exercises/1- text-summary-pipe/text-summary.pipe";
import {LikeComponent} from "./exercises/2- like-component/like.component";
import {VoterComponent} from "./exercises/3- voter-component/voter.component";
import {Voter2Component} from "./part2/1-voter/voter2.component";
import {GreeterComponent} from './part2/greeter/greeter.component';
import {Todos2Component} from "./part2/2-todos/todos2.component";
import {UserDetailsComponent} from "./part2/3-user-details/user-details.component";

@NgModule({
  declarations: [
    AppComponent,
    TextSummaryPipe,
    TypedTextSummaryPipe,
    LikeComponent,
    VoterComponent,
    Voter2Component,
    GreeterComponent,
    Todos2Component,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
