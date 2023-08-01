import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { EquipoPagessComponent } from './pages/equipos/equipos.component';
 
import { InventarioComponent } from './pages/inventario/inventario.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';

 
const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'equipos', component: EquipoPagessComponent },
      { path: 'pedidos', component: PedidosComponent },
      { path: 'inventario', component: InventarioComponent },
    

      { path: '**', redirectTo: 'equipos' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
