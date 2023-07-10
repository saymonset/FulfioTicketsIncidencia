import { Component, inject, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/services/auth.service';
import { searchBy } from '../../interfaces/search-incidencia.interface';
import {IncidenciaServiceService} from "../../services/incidencia-service.service";

@Component({
  selector: 'incidencia-tabla-dialog',
  templateUrl: './incidencia-tabla-dialog.component.html',
  styleUrls: ['./incidencia-tabla-dialog.component.css']
})
export class IncidenciaTablaDialogComponent {

  private fb          = inject( FormBuilder );
  private incidenciaServiceService = inject(IncidenciaServiceService);

  public names = ['DUDA', 'PEDIDO', 'INTEGRACION'];
  constructor(
    public dialogRef: MatDialogRef<IncidenciaTablaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: searchBy,
  ) {}

  public myForm: FormGroup = this.fb.group({
    incidencia:    ['', [ Validators.required ]],
    tipo_incidencia: ['', [ Validators.required]],
    mensaje: ['', [ Validators.required]]
  });

  onConfirm():void{

    this.incidenciaServiceService.createIncidencias(this.myForm.value)
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
