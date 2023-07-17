import { Component } from '@angular/core';

@Component({
  selector: 'app-cine-component',
  templateUrl: './cine-component.component.html',
  styleUrls: ['./cine-component.component.css']
})
export class CineComponentComponent {
  entradas: Entrada[] = [];

  ngOnInit() {
    this.entradas.push(new Entrada('Entrada Infantil', 'Infantil', 5));
    this.entradas.push(new Entrada('Entrada General', 'General', 10));
    this.entradas.push(new Entrada('Entrada VIP', 'VIP', 20));
  }
}
export class Entrada {
  nombre: string;
  categoria: string;
  precio: number;

  constructor(nombre: string, categoria: string, precio: number) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
  }
  
}