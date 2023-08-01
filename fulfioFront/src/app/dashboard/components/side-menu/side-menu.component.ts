import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import Swal from "sweetalert2";

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  private router      = inject( Router )

  public menuItems = signal<MenuItem[]>([
    { title: 'Pedidos', route: 'pedidos' },
    { title: 'Inventario', route: 'inventario' },
    { title: 'Equipos', route: 'equipos' },

    { title: 'Salir', route: '/auth' },
  ]);



}
