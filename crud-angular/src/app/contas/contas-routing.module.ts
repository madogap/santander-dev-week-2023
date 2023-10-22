import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContasComponent } from './contas/contas.component';
import { ContasFormComponent } from './contas-form/contas-form.component';
import { ContaResolver } from './guards/conta.resolver';

const routes: Routes = [
  { path:'', component: ContasComponent },
  { path:'new', component: ContasFormComponent, resolve:{conta:ContaResolver}  },
  { path:'edit/:id', component: ContasFormComponent, resolve:{conta:ContaResolver} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContasRoutingModule { }
