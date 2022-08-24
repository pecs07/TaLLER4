import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    RegistroComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule
  ]
})
export class EmpresasModule { }
