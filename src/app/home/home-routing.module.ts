import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./pages/inicio/inicio.component";

const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        children: [
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }