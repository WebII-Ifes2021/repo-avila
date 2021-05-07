import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoComponent } from './auto/auto.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

import {PadreComponent} from './comunicacion-componentes/componente-padre/padre.component';
import {HijoComponent} from './comunicacion-componentes/componente-hijo/hijo.component';



@NgModule({
  declarations: [
    AppComponent,
    AutoComponent, PadreComponent, HijoComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule, MatFormFieldModule, BrowserAnimationsModule,
    MatIconModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
