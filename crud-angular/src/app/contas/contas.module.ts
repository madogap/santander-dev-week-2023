import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContasRoutingModule } from './contas-routing.module';
import { ContasComponent } from './contas/contas.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContasComponent
  ],
  imports: [
    CommonModule,
    ContasRoutingModule,
    AppMaterialModule,
    SharedModule

  ]
})
export class ContasModule { }
