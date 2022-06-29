import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoTarjetaComponent } from './components/producto-tarjeta/producto-tarjeta.component';
import { ProductosRoutingModule } from './productos-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListarProductosPageComponent } from './pages/listar-productos/listar-productos.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductoTarjetaComponent,
    InicioComponent,
    AgregarComponent,
    ListarProductosComponent,
    ListarProductosPageComponent,
    ProductoDetalleComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule
  ]
})
export class ProductosModule { }
