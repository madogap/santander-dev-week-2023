import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Conta } from '../model/conta';

import { ActivatedRoute, Router } from '@angular/router';
import { ContasFormComponent } from '../contas-form/contas-form.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ButtonCreatedContaComponent } from '../components/button-created-conta/button-created-conta.component';

@Component({
  selector: 'app-contas-list',
  templateUrl: './contas-list.component.html',
  styleUrls: ['./contas-list.component.scss']
})
export class ContasListComponent {



  @Input()contas:Conta[]=[];

  @Output() edit = new EventEmitter(false);
  readonly displayedColumns = ['name', 'category', 'dinheiroTotal', 'actions'];

  constructor(
    private router:Router,
    private route:ActivatedRoute) {

    }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
    console.log("Vamos continuar aprendendo");

  }
  onEdit(conta:Conta){
    this.edit.emit(conta);



  }


}
