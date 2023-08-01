import { Component, inject, OnInit, signal } from '@angular/core';
import { Incidencia, ResposeIncidencia } from '../../interfaces/incidencia-request.interface';
import { EquiposService } from '../../services/equipos.service';
import { Equipo, EquipoPingResponse, searchCompuBy } from '../../interfaces/equipos.interface';

@Component({
  selector: 'equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquipoPagessComponent implements OnInit {

  private equipoService = inject(EquiposService);

  public incidencias: Incidencia[] = [];

  public equipos: Equipo[] = [];

  public equipoPing: Equipo[] = [];

  public detalles: string = '';

  public idBuscarDetalle:string='';

  public busqueda:searchCompuBy={
    id:    ''
  }


  private buscarEquipos():void{
    this.equipoService.getEquipos(this.busqueda)
      .subscribe({
        next: (data) => {
          this.equipos= data;

          console.log(data);
        },
        error: () => {
        },
      });
  }
  ngOnInit(): void {

    this.buscarEquipos();
  }


  refrescarIncidencias(refrescar:boolean):void{
    if (refrescar){
      this.buscarEquipos();
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
 
    if (this.idBuscarDetalle !== id){
      this.idBuscarDetalle = id;

      this.busqueda.id=id;
      this.equipoService.createEquipoPing(id)
      .subscribe({
        next: ({respuesta}) => {
         // let {ipv4} = data;
 
         this.detalles=`Ping rechazado`   ;
        if(respuesta){
          this.detalles=`La ip hizo ping`   ;
        }
       
  
        },
        error: () => {
        },
      });
     
    }else{
      this.idBuscarDetalle = '';
    }

    console.log(id);
 
  }

  public onSearchIncidencia(busqueda:searchCompuBy):void{
    this.busqueda = busqueda;
    this.buscarEquipos();
  }

}
