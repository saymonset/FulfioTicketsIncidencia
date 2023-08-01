import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map, tap, of } from 'rxjs';
import { CrearEquipo, Equipo, EquipoPing, EquipoPingResponse, ResponEqauipos, searchCompuBy } from '../interfaces/equipos.interface';
import {
  CrearIncidencia,
  CrearResposeIncidencia,
  DetallesIncidencia,
  Incidencia,
  ResponIncidencias,
  ResposeIncidencia,
  UpdateIncidencia
} from '../interfaces/incidencia-request.interface';
import {searchBy} from "../interfaces/search-incidencia.interface";

@Injectable({
  providedIn: 'root'
})
export class EquiposService {


  private http = inject( HttpClient );
  private baseUrl = 'http://localhost:8081/api';
  //localhost:8081/api/incidencias

  //localhost:8081/api/incidencias
//localhost:8081/api/incidencias?estado=en-curso&mensaje=mundo


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


createIncidencias(newIncidencia:CrearIncidencia): Observable<Incidencia> {
  return this.http.post<DetallesIncidencia>(`${ this.baseUrl }/incidencias`,newIncidencia)
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



  getIncidencias(busqueda:searchBy): Observable<Incidencia[]> {

    if (!busqueda.estado){
      busqueda.estado='en-curso'
    }
    const params = new HttpParams()
      .set('estado', busqueda.estado)
      .set('mensaje', busqueda.mensaje);


    return this.http.get<ResponIncidencias>(`${ this.baseUrl }/incidencias`,{params})
      .pipe(
        map( response => {
          return response.incidencias} ),
        tap( console.log ),
      );
  }


  geDetallesIncidencias(id:string): Observable<ResposeIncidencia[]> {
    return this.http.get<DetallesIncidencia>(`${ this.baseUrl }/resincidencias/${id}`)
      .pipe(
        map( response => {
          return response.respose_incidencias} ),
        tap( console.log ),
      );
  }



  updateIncidencias(updateIncidencia:UpdateIncidencia,incidencia:string): Observable<Incidencia> {
    //console.log(`simons =${ JSON.stringify(incidencia)}`)
    console.log(`${ this.baseUrl }/incidencias/${incidencia}`+ JSON.stringify(updateIncidencia));
    return this.http.put<UpdateIncidencia>(`${ this.baseUrl }/incidencias/${incidencia}`,updateIncidencia)
      .pipe(
        map( response => {
          return response} ),
        tap( console.log ),
      );
  }


  createResponseIncidencias(newIncidencia:CrearResposeIncidencia): Observable<ResposeIncidencia> {
    return this.http.post<CrearResposeIncidencia>(`${ this.baseUrl }/resincidencias`,newIncidencia)
      .pipe(
        map( response => {
          newIncidencia={
            mensaje:  '',
            archivo:    '',
            usuario:    '',
            incidencia: '',
          };
          return response} ),
        tap( console.log ),
      );
  }

  // crearDetallesIncidencias(id:string): Observable<ResposeIncidencia[]> {
  //   return this.http.post<CrearResposeIncidencia>(`${ this.baseUrl }/resincidencias`)
  //     .pipe(
  //       map( response => {
  //         return of(true)} ),
  //       tap( console.log ),
  //     );
  // }
  //
  // authenticate(userDTO: UserDTO): Observable<boolean> {
  //   return this.http.post<any>(this.baseUrl + 'autenticate/user', userDTO, this.getOptions())
  //     .pipe(catchError((error: Response) =>
  //       throwError(`Authentication Failed. Network Error: ${error.statusText} (${error.status})`)))
  //     .pipe(map(response => {
  //       this.auth_token = response.success ? response.token : null;
  //       return response.success;
  //     }));
  // }



  constructor() { }
}
