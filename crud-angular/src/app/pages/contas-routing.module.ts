import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContasComponent } from './contas/contas.component';

import { ContaResolver } from './guards/conta.resolver';
import { ButtonCreatedContaComponent } from './components/button-created-conta/button-created-conta.component';
import { ButtonEditContaComponent } from './components/button-edit-conta/button-edit-conta.component';


const routes: Routes = [
  { path:'', component: ContasComponent },
  { path:'new', component: ButtonCreatedContaComponent, resolve:{conta:ContaResolver}  },
  { path:'edit/:id', component: ButtonEditContaComponent, resolve:{conta:ContaResolver} },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContasRoutingModule { }
