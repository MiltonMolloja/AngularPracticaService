import { NumberValueAccessor } from '@angular/forms/src/directives';

export class Moneda {
  compra: number;
  venta: number;
  agencia: number;
  nombre: string;
  variacion: number;
  ventaCero: boolean;
  decimales: number;
  montoRecibido: number;
  montoEntregado: number;
  tipoCambio : string;

  Moneda(compra?: number, venta?: number, agencia?: number, nombre?: string, variacion?: number, ventaCero?: boolean, decimales?: number, montoRecibido?: number, montoEntregado?: number,tipoCambio : string) {
    this.compra = compra;
    this.venta = venta;
    this.agencia = agencia;
    this.nombre = nombre;
    this.variacion = variacion;
    this.ventaCero = ventaCero;
    this.decimales = decimales;
    this.montoRecibido = montoRecibido;
    this.montoEntregado = montoEntregado;
    this.tipoCambio = tipoCambio;
  }
}
