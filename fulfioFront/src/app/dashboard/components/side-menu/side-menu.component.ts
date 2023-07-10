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
    { title: 'Incidencias', route: 'incidencias' },
    { title: 'Devoluciones', route: 'devoluciones' },
    { title: 'Salir', route: '/auth' },
  ]);

  // login() {
  //   const { email, password } = this.myForm.value;
  //   this.authService.login(email, password)
  //     .subscribe({
  //       next: () => this.router.navigateByUrl('/dashboard'),
  //       error: (message) => {
  //         //     console.log('Hol mundo');
  //         //   console.log(`${message}`);
  //         Swal.fire('Error', message, 'error' )
  //       }
  //     })
  // }

  // public menuItems: MenuItem[] = [
  //   { title: 'Contador', route: 'counter' },
  //   { title: 'Usuario', route: 'user-info' },
  //   { title: 'Mutaciones', route: 'properties' },
  // ];

}
