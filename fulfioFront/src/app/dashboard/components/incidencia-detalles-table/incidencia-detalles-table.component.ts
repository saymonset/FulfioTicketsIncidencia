import {Component, EventEmitter, Input, Output, OnInit, inject} from '@angular/core';
import {CrearResposeIncidencia, Incidencia, ResposeIncidencia} from '../../interfaces/incidencia-request.interface';
import {IncidenciaServiceService} from "../../services/incidencia-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'incidencia-detalles-table',
  templateUrl: './incidencia-detalles-table.component.html',
  styleUrls: ['./incidencia-detalles-table.component.css']
})
export class IncidenciaDetallesTableComponent implements OnInit{


public incidenciaId:string | null= '';

  private incidenciaServiceService = inject(IncidenciaServiceService);

  private fb          = inject( FormBuilder );

  private responseIncidencia:CrearResposeIncidencia = {
    mensaje:  '',
    archivo:    '',
    usuario:    '',
    incidencia: '',
  };

  @Output()
  public onRefrescar: EventEmitter<boolean> = new EventEmitter();

  @Input()
  public detallesincidencias: ResposeIncidencia[] = [];

  @Output()
  public onNewCharacter: EventEmitter<string> = new EventEmitter();

  public myForm: FormGroup = this.fb.group({

    mensaje: ['', [ Validators.required]]
  });
  ngOnInit(): void {

  }

  emitCharacter(id:string):void {
   if ( id) {
       this.onNewCharacter.emit(id);
   }
}
  enviar():void{
    if (this.detallesincidencias){

      console.log('incidencia = '+ localStorage.getItem('uidIncidencia'));
      console.log('usuario = '+localStorage.getItem('uid'));
      console.log(JSON.stringify(localStorage.getItem('isAdmin')));
      console.log(JSON.stringify(localStorage.getItem('nombre')));
      console.log(JSON.stringify(this.myForm.value.mensaje));
      this.incidenciaId = localStorage.getItem('uidIncidencia');
      if (this.incidenciaId){
        this.responseIncidencia.incidencia= this.incidenciaId;
      }

      this.responseIncidencia.archivo='';
      let idUsuario = localStorage.getItem('uid')==null?'':localStorage.getItem('uid')?.toString();
      this.responseIncidencia.usuario=idUsuario;
      this.responseIncidencia.mensaje = this.myForm.value.mensaje;
      this.myForm.reset();
      this.incidenciaServiceService.createResponseIncidencias(this.responseIncidencia)
        .subscribe({
          next: (data) => {
               this.onRefrescar.emit(true);

            this.responseIncidencia = {
                            mensaje:  '',
                            archivo:    '',
                            usuario:    '',
                            incidencia: '',
            };

          },
          error: () => {
          },
        });


    }
  }
}
