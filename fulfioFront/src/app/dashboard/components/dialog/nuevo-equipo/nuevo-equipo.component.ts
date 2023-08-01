import { Component, inject, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { searchBy } from 'src/app/dashboard/interfaces/search-incidencia.interface';
import { EquiposService } from 'src/app/dashboard/services/equipos.service';

@Component({
  selector: 'app-nuevo-equipo',
  templateUrl: './nuevo-equipo.component.html',
  styleUrls: ['./nuevo-equipo.component.css']
})
export class NuevoEquipoComponent {

  private fb          = inject( FormBuilder );
  private servicio = inject(EquiposService);

  public names = ['DUDA', 'PEDIDO', 'INTEGRACION'];
  constructor(
    public dialogRef: MatDialogRef<NuevoEquipoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: searchBy,
  ) {}

  public myForm: FormGroup = this.fb.group({
    nombre:    ['', [ Validators.required ]],
    ipv4: ['', [ Validators.required]]
  });

  onConfirm():void{

    this.servicio.createEquipos(this.myForm.value)
      .subscribe({
        next: (data) => {

        },
        error: () => {
        },
      });
    this.dialogRef.close(true);
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
