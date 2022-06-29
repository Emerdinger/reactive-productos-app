import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from '../../interfaces/productos.interface';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  @Input() producto!: Productos;
  @Output() eliminarEvent: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  eliminar(id: string) {
    this.eliminarEvent.emit(id);
  }

  verMas() {
    this.router.navigate([`/productos/detalle/${this.producto.id}`]);
  }

}
