import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { Punto01Component } from './components/punto01/punto01.component';
import { Punto02Component } from './components/punto02/punto02.component';
import { Punto03Component } from './components/punto03/punto03.component';
import { Punto04Component } from './components/punto04/punto04.component';


import { Invalida, Negativo, SinEspacios } from "./validaciones.directive";

import { FormsModule } from "@angular/forms";

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    Punto01Component,
    Punto02Component,
    Punto03Component,
    Punto04Component,
    Invalida,
    Negativo,
    SinEspacios
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
