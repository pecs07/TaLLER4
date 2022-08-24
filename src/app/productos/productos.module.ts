import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    DescripcionComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
