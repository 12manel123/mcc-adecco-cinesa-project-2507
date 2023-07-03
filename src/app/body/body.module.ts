import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TarjetaComponent } from './tarjeta/tarjeta.component';



@NgModule({
  declarations: [
    CuerpoComponent,
    TarjetaComponent
  ],
  imports: [
    CommonModule, 
    MatCardModule,
    MatButtonModule
  ],
  exports: [CuerpoComponent, TarjetaComponent ]
})
export class BodyModule { }
