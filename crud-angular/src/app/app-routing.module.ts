import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/pages/login/login.component';
import { SignupComponent } from './pages/pages/signup/signup.component';
import { HomeComponent } from './pages/pages/home/home.component';
import { MasterComponent } from './pages/pages/master/master.component';
import { RegisterComponent } from './pages/pages/register/register.component';
import { authGuard } from './pages/pages/guards/auth.guard';

const routes: Routes = [
  { path:'', pathMatch:'full',redirectTo:'login' },
  {
    path:'contas',
    loadChildren:()=>import('./pages/contas.module').then(m=>m.ContasModule)
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'master', component: MasterComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'singin', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
