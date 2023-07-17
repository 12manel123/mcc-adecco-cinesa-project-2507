import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridPrincipalComponent } from './body-grid/grid-principal/grid-principal.component';
import { CardProductoComponent } from './body-grid/card-producto/card-producto.component';

const routes: Routes = [ 
  { path:'cardproducto', component: CardProductoComponent},
  { path:'gridproducto', component: GridPrincipalComponent},
   { path:'', redirectTo:"home",pathMatch:"full"},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
