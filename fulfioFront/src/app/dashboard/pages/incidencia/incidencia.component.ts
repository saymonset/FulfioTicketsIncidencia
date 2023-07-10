import { Component, inject, OnInit, signal } from '@angular/core';
import { Incidencia, ResposeIncidencia } from '../../interfaces/incidencia-request.interface';
import { IncidenciaServiceService } from '../../services/incidencia-service.service';
import {searchBy} from "../../interfaces/search-incidencia.interface";

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css']
})
export class IncidenciaComponent implements OnInit {

  private incidenciaServiceService = inject(IncidenciaServiceService);

  public incidencias: Incidencia[] = [];

  public detallesincidencias: ResposeIncidencia[] = [];

  public idBuscarDetalle:string='';
  public busqueda:searchBy={
    estado:    '',
    mensaje:   ''
  }


  private buscarIncidencias():void{
    this.incidenciaServiceService.getIncidencias(this.busqueda)
      .subscribe({
        next: (data) => {
          this.incidencias = data;
        },
        error: () => {
        },
      });
  }
  ngOnInit(): void {

    this.buscarIncidencias();
  }


  refrescarIncidencias(refrescar:boolean):void{
    if (refrescar){
      this.buscarIncidencias();
    }
  }

  refrescarResponseIncidencias(refrescar:boolean):void{
    if (refrescar){
      let id = localStorage.getItem('uidIncidencia');
      if (id){
        this.obtenerId(id);
      }

    }
  }

  obtenerId(id:string):void{

    if (id){
      this.idBuscarDetalle = id;
      if (this.idBuscarDetalle){
        if (id){
          localStorage.setItem('uidIncidencia',id);
          this.incidenciaServiceService.geDetallesIncidencias(this.idBuscarDetalle )
            .subscribe({
              next: (data) => {
                if(data){
                  this.detallesincidencias = data;
                }
              },
              error: () => {
              },
            });
        }
    }



    }
  }

  public onSearchIncidencia(busqueda:searchBy):void{
    this.busqueda = busqueda;
    this.buscarIncidencias();
  }

}
