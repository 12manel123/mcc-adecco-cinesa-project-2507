import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLinkComponent } from './main-link/main-link.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HeaderDownComponent } from './header-down/header-down.component';



@NgModule({
  declarations: [
    MainLinkComponent,
    MainNavComponent,
    HeaderDownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainLinkComponent,
    MainNavComponent,
    HeaderDownComponent
  ]
})
export class HeaderSecunModule { }
