import {Component, Inject, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IncidenciaServiceService} from "../../services/incidencia-service.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {searchBy} from "../../interfaces/search-incidencia.interface";
import { IncidenciaTablaDialogComponent } from '../incidencia-tabla-dialog/incidencia-tabla-dialog.component';

@Component({
  selector: 'app-incidencia-tabla-cambio-estado-dialogo',
  templateUrl: './incidencia-tabla-cambio-estado-dialogo.component.html',
  styleUrls: ['./incidencia-tabla-cambio-estado-dialogo.component.css']
})
export class IncidenciaTablaCambioEstadoDialogoComponent {

  private fb          = inject( FormBuilder );
  private incidenciaServiceService = inject(IncidenciaServiceService);
  public names = ['resuelta', 'en-curso'];
  constructor(
    public dialogRef: MatDialogRef<IncidenciaTablaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public id: string,
  ) {
   // console.log(this.incidencia)
  }

  public myForm: FormGroup = this.fb.group({
     estado: ['', [ Validators.required]],
  });

  onConfirm():void{



    this.incidenciaServiceService.updateIncidencias(this.myForm.value, this.id)
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
