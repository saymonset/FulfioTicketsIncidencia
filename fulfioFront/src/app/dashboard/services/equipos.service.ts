import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map, tap, of } from 'rxjs';
import { CrearEquipo, Equipo, EquipoPing, EquipoPingResponse, ResponEqauipos, searchCompuBy } from '../interfaces/equipos.interface';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {


  private http = inject( HttpClient );
  private baseUrl = 'http://localhost:8081/api';


getEquipos(busqueda:searchCompuBy): Observable<Equipo[]> {

  const params = new HttpParams()
    .set('id', busqueda.id);

  return this.http.get<ResponEqauipos>(`${ this.baseUrl }/equipos/${busqueda.id}`,{params})
    .pipe(
      map( response => {
        return response.equipos} ),
      tap( console.log ),
    );
}

createEquipoPing(id:string): Observable<EquipoPingResponse> {
  let user = localStorage.getItem('uid');
  let newPing: EquipoPing = {
    'usuario':user!,
    'equipo':id
  }

  return this.http.post<EquipoPingResponse>(`${ this.baseUrl }/equiposPing`,newPing)
    .pipe(
      map( response => {
        return response} ),
      tap( console.log ),
    );
}


createEquipos(newEquipo:CrearEquipo): Observable<Equipo> {
  return this.http.post<Equipo>(`${ this.baseUrl }/equipos`,newEquipo)
    .pipe(
       map( response => {
        return response} ),
      tap( console.log ),
    );
}

  constructor() { }
}
