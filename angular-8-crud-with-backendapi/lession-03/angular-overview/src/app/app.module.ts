import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckAllComponent } from './check-all/check-all.component';
import { HackerNewComponent } from './hacker-new/hacker-new.component';
import { HackerNewLikeComponent } from './hacker-new-like/hacker-new-like.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckAllComponent,
    HackerNewComponent,
    HackerNewLikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
