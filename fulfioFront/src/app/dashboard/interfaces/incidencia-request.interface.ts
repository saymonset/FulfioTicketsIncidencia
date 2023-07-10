export interface ResponIncidencias {
  incidencias: Incidencia[];
}

export interface DetallesIncidencia {
    respose_incidencias: ResposeIncidencia[];
}



export interface ResposeIncidencia {
  _id:        string;
  mensaje:    string;
  archivo:    string;
  usuario:    Usuario;
  incidencia: Incidencia;
  createdAt:  Date;
}

export interface Incidencia {
  tipo_incidencia: string;
  estado:          string;
  _id:             string;
  mensaje:         string;
  num_incidencia:  string;
  createdAt:       Date;
  __v:             number;
}

export interface Usuario {
  rol:      string;
  estado:   boolean;
  _id:      string;
  nombre:   string;
  correo:   string;
  password: string;
  __v:      number;
}


export interface CrearResposeIncidencia {
  mensaje:    string;
  archivo:    string;
  usuario:    string | undefined;
  incidencia: string;
}

export interface CrearIncidencia{
  incidencia:string,
  tipo_incidencia:string,
  mensaje:string
}
export interface UpdateIncidencia{
  estado:string
}
