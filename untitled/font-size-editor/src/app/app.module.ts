import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontsizeeditorComponent } from './fontsizeeditor/fontsizeeditor.component';
import { PetComponentComponent } from './pet-component/pet-component.component';
import { PetComponent } from './pet/pet.component';
import { AwesomeCalculatorComponent } from './awesome-calculator/awesome-calculator.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FontsizeeditorComponent,
    PetComponentComponent,
    PetComponent,
    AwesomeCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
