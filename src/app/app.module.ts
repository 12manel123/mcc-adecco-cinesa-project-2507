import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {MatCardModule}  from   '@angular/material/card'  ; 
import { HeaderModule } from './header/header.module';
import { BodyModule } from './body/body.module';
import { FooterModule } from './footer/footer.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ComponenteGeneralComponent } from './componente-general/componente-general.component';
import { HeaderSecunModule } from './header-secun/header-secun.module';
import { BodyGridModule } from './body-grid/body-grid.module';


@NgModule({
  declarations: [
    AppComponent,
    ComponenteGeneralComponent,


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
    FooterModule,
    MatIconModule,
    MatToolbarModule,
    HeaderSecunModule,
    BodyGridModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
