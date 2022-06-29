import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgregarComponent } from "./pages/agregar/agregar.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { ListarProductosPageComponent } from "./pages/listar-productos/listar-productos.component";
import { ProductoDetalleComponent } from "./pages/producto-detalle/producto-detalle.component";

const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        children: [
            {
                path:"listar",
                component: ListarProductosPageComponent
            },
            {
                path:'nuevo',
                component: AgregarComponent
            },
            {
                path: 'detalle/:id',
                component: ProductoDetalleComponent
            },
            {
                path: '**',
                redirectTo: 'listar'
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductosRoutingModule { }