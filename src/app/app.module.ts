import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoComponent } from './auto/auto.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';

import {PadreComponent} from './comunicacion-componentes/componente-padre/padre.component';
import {HijoComponent} from './comunicacion-componentes/componente-hijo/hijo.component';
import {HijaComponent} from './comunicacion-componentes/componente-hija/hija.component';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    AutoComponent, PadreComponent, HijoComponent, HijaComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, MatRadioModule,
    BrowserAnimationsModule, MatDatepickerModule,
    AppRoutingModule, MatFormFieldModule, BrowserAnimationsModule,
    MatIconModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
