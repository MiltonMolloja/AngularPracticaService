import { Component, OnInit } from '@angular/core';

import { MonedaService } from './../../services/punto02/moneda.service';
import { Moneda } from './../../models/punto02/moneda';

import { NgForm } from '@angular/forms';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-punto02',
  templateUrl: './punto02.component.html',
  styleUrls: ['./punto02.component.css']
})
export class Punto02Component implements OnInit {

 moneda: Moneda;
 monedas: Array<Moneda>;

 // private _http: HttpClient
  valorVenta: number= null;
  valorCompra: number=null;
  montoMostrar: number=null;


  constructor(private monedaService:MonedaService) {
    this.moneda = new Moneda();
    this.monedas = new Array<Moneda>();
    this.cargarTeams();
   }

  ngOnInit() {
  }

  cargarTeams(){
    this.monedaService.getValoresDeCambio().subscribe(
      (result) => {
        this.moneda = new Moneda();
        Object.assign(this.moneda,result[0].casa);
        this.valorCompra = parseFloat(result[0].casa.compra.replace(',','.'));
        this.valorVenta = parseFloat(result[0].casa.venta.replace(',','.'));
       //console.log(parseFloat("43,5".replace(',','.')));
        },
        error => {
          alert("Error en la petición");
        }
       )
  }

  public convertirMoneda() {
      //this.moneda = new Moneda();
      this.cargarTeams();
      this.moneda.compra = this.valorCompra;
      this.moneda.venta = this.valorVenta;
      if (this.moneda.tipoCambio != "true") {
        this.moneda.montoEntregado = this.moneda.montoRecibido * this.valorCompra;
      } else {
        this.moneda.montoEntregado = this.moneda.montoRecibido / this.valorVenta ;
      }
      console.log(this.moneda.montoEntregado);
      this.montoMostrar = this.moneda.montoEntregado;
      this.monedas.push(this.moneda);
      this.moneda = new Moneda();
  }

}
