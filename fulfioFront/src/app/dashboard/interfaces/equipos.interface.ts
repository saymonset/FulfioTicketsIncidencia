export interface ResponEqauipos {
    equipos: Equipo[];
}

export interface Equipo {
    status:   boolean;
    _id:      string;
    nombre:   string;
    ipv4:     string;
    creadoEn: Date;
}


export interface searchCompuBy {
    id:    string;
  }

  export interface CrearEquipo {
    
    nombre:   string;
    ipv4:     string;
  
}

export interface EquipoPingResponse {
    respuesta: boolean;
    _id:       string;
    usuario:   string;
    equipo:    string;
    createdAt: Date;
}

export interface EquipoPing {
    
    usuario:   string;
    equipo:    string;
    
}