import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductoComponent } from './card-producto/card-producto.component';
import { GridPrincipalComponent } from './grid-principal/grid-principal.component';
import { GridSecundarioComponent } from './grid-secundario/grid-secundario.component';



@NgModule({
  declarations: [
    CardProductoComponent,
    GridPrincipalComponent,
    GridSecundarioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardProductoComponent,
    GridPrincipalComponent,
    GridSecundarioComponent
  ]
})
export class BodyGridModule { }
