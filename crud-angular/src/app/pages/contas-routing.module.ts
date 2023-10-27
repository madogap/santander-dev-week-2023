import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContasComponent } from './contas/contas.component';

import { ContaResolver } from './guards/conta.resolver';
import { ButtonCreatedContaComponent } from './components/button-created-conta/button-created-conta.component';
import { ButtonEditContaComponent } from './components/button-edit-conta/button-edit-conta.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MasterComponent } from './pages/master/master.component';
import { HomeComponent } from './pages/home/home.component';
import { ReportsComponent } from './pages/reports/reports.component';

const routes: Routes = [
  { path:'', component: ContasComponent },
  { path:'new', component: ButtonCreatedContaComponent, resolve:{conta:ContaResolver}  },
  { path:'edit/:id', component: ButtonEditContaComponent, resolve:{conta:ContaResolver} },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'master', component: MasterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'reports', component: ReportsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContasRoutingModule { }
