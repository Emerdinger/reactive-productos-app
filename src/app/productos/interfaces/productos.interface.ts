export interface Productos {
    id:          string;
    nombre:      string;
    descripcion: string;
    marca:       string;
    categoria:   string;
    cantidad:    number;
    precio:      number;
    createdAt:   Date;
    img:         String;
}

export interface Respuesta {
    mensaje: string;
    dato:    Productos;
}

