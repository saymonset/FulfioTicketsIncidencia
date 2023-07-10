import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { DevolucionesComponent } from './pages/devoluciones/devoluciones.component';
import { IncidenciaComponent } from './pages/incidencia/incidencia.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'pedidos', component: PedidosComponent },
      { path: 'inventario', component: InventarioComponent },
      { path: 'incidencias', component: IncidenciaComponent },
      { path: 'devoluciones', component: DevolucionesComponent },

      { path: '**', redirectTo: 'incidencias' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
