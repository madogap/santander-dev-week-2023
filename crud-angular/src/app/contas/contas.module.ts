import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { ContasRoutingModule } from './contas-routing.module';
import { ContasComponent } from './contas/contas.component';

@NgModule({
  declarations: [
    ContasComponent
  ],
  imports: [
    CommonModule,
    ContasRoutingModule,
    MatTableModule
  ]
})
export class ContasModule { }
