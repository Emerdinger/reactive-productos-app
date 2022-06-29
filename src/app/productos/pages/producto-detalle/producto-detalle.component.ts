import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Error } from '../../interfaces/error.interface';
import { Productos, Respuesta } from '../../interfaces/productos.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  public producto !: Productos;
  public error !: Error;

  constructor(private productosService: ProductosService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActiva.params.pipe(
      switchMap((param) => this.productosService.obtenerPorId(param['id']))
    ).subscribe(resp => {
      this.producto = resp.dato;
    }, err => {
      this.error = err.error;
    })
  }

}
