import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {MatCardModule}  from   '@angular/material/card'  ; 
import { HeaderModule } from './header/header.module';
import { BodyModule } from './body/body.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ComponenteGeneralComponent } from './componente-general/componente-general.component';
import { HeaderSecunModule } from './header-secun/header-secun.module';
import { BodyGridModule } from './body-grid/body-grid.module';
import { VistasModule } from './vistas/vistas.module';
import { CineComponentComponent } from './cine-component/cine-component.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    ComponenteGeneralComponent,
    CineComponentComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    HeaderModule,
    BodyModule,
    MatIconModule,
    MatToolbarModule,
    HeaderSecunModule,
    BodyGridModule,
    VistasModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
