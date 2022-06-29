import{ HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Productos, Respuesta } from '../interfaces/productos.interface';

@Injectable({
    providedIn: 'root'
})
export class ProductosService {
    private baseUrl: String = environment.baseUrl;

    constructor(private http: HttpClient) { }

    obtenerTodos(): Observable<Productos[]> {
        return this.http.get<Productos[]>(this.baseUrl + '/all');
    }

    obtenerPorId(termino: String): Observable<Respuesta> {
        return this.http.get<Respuesta>(this.baseUrl + '/' + termino);
    }

    agregarProducto(producto: Productos) {
        return this.http.post(`${this.baseUrl}`, producto);
    }

    eliminarProducto(id: string) {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
}