import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import{ ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AutoComponent } from './auto/auto.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

//import {PadreComponent} from './comunicacion-componentes/componente-padre/padre.component';
//import {HijoComponent} from './comunicacion-componentes/componente-hijo/hijo.component';

import {MatDatepickerModule} from '@angular/material/datepicker';


import {MatNativeDateModule} from '@angular/material/core';
import { jefeComponent } from './jefe/jefe.component';
import { empleadoComponent } from './empleado/empleado.component';


@NgModule({
  declarations: [
    AppComponent,
    //AutoComponent,
     jefeComponent, empleadoComponent //, PadreComponent, HijoComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule, MatFormFieldModule, BrowserAnimationsModule,
    MatIconModule,MatInputModule, ReactiveFormsModule, MatDatepickerModule, 
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
