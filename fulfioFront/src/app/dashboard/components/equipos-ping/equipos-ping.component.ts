import {Component, EventEmitter, Input, Output, OnInit, inject} from '@angular/core';
import {CrearResposeIncidencia, Incidencia, ResposeIncidencia} from '../../interfaces/incidencia-request.interface';
import {IncidenciaServiceService} from "../../services/incidencia-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'equipos-ping',
  templateUrl: './equipos-ping.component.html',
  styleUrls: ['./equipos-ping.component.css']
})
export class EquiposPingComponent implements OnInit{


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
    public detalles: string = '';
  
   
    ngOnInit(): void {
  
    }
  
     
  }
  