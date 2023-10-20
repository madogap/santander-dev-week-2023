import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContasRoutingModule } from './contas-routing.module';
import { ContasComponent } from './contas/contas.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ContasFormComponent } from './contas-form/contas-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContasComponent,
    ContasFormComponent
  ],
  imports: [
    CommonModule,
    ContasRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule

  ]
})
export class ContasModule { }
