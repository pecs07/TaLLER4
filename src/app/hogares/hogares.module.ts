import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HogaresRoutingModule } from './hogares-routing.module';
import { MainComponent } from './main/main.component';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    MainComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    HogaresRoutingModule
  ]
})
export class HogaresModule { }
