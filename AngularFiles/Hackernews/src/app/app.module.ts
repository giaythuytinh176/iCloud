import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { LikesComponent } from './likes/likes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';
import { AddArticleComponent } from './add-article/add-article.component';

@NgModule({
  declarations: [
    AppComponent,
    LikesComponent,
    NavbarComponent,
    FooterComponent,
    ArticleComponent,
    AddArticleComponent
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
