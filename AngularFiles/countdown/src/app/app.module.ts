import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';
import {CountdownTimerAliasComponent} from "./countdown-timer-alias/countdown-timer-alias.component";
import {RatingBarComponent} from "./rating-bar/rating-bar.component";
import {PipeDemoComponent} from "./pipe-demo/pipe-demo.component";

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    CountdownTimerAliasComponent,
    RatingBarComponent,
    PipeDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
