import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContasRoutingModule } from './contas-routing.module';
import { ContasComponent } from './contas/contas.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ContasFormComponent } from './contas-form/contas-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContasListComponent } from './contas-list/contas-list.component';

import { ButtonEditContaComponent } from './components/button-edit-conta/button-edit-conta.component';
import { ButtonCreatedContaComponent } from './components/button-created-conta/button-created-conta.component';
import { ButtonDeleteContaComponent } from './components/button-delete-conta/button-delete-conta.component';
import { LoginComponent } from './pages/login/login.component';
import { MasterComponent } from './pages/master/master.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ContasComponent,
    ContasFormComponent,
    ContasListComponent,
    ButtonEditContaComponent,
    ButtonCreatedContaComponent,
    ButtonDeleteContaComponent,
    LoginComponent,
    MasterComponent,
    HomeComponent,
    RegisterComponent,

  ],
  imports: [
    CommonModule,
    ContasRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ]
})
export class ContasModule { }
