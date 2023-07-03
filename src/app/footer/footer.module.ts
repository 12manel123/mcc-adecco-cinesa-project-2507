import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
PiePaginaComponent

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [PiePaginaComponent]
})
export class FooterModule { }
