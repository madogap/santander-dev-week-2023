import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Conta } from '../model/conta';

import { ActivatedRoute, Router } from '@angular/router';
import { ContasFormComponent } from '../contas-form/contas-form.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contas-list',
  templateUrl: './contas-list.component.html',
  styleUrls: ['./contas-list.component.scss']
})
export class ContasListComponent implements OnInit {



  @Input()contas:Conta[]=[];

  @Output() edit = new EventEmitter(false);
  readonly displayedColumns = ['name', 'category', 'dinheiroTotal', 'actions'];

  constructor(
    private router:Router,
    private route:ActivatedRoute) {

    }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
    console.log("Vamos continuar aprendendo");
  }
  onEdit(conta:Conta){
    this.edit.emit(conta);

  }


}
