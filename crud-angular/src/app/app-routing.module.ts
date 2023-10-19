import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', pathMatch:'full',redirectTo:'contas' },
  {
    path:'contas',
    loadChildren:()=>import('./contas/contas.module').then(m=>m.ContasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
