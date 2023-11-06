import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Conta } from '../model/conta';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-contas-list',
  templateUrl: './contas-list.component.html',
  styleUrls: ['./contas-list.component.scss']
})
export class ContasListComponent {

  @Input()contas:Conta[]=[];

  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category', 'dinheiroTotal', 'actions'];

  constructor(
    private router:Router,
    private route:ActivatedRoute) {

    }

  onAdd(){
    this.add.emit(true)
    console.log("Vamos continuar aprendendo");

  }
  onEdit(conta:Conta){
    this.edit.emit(conta);
  }

  onDelete(conta:Conta){
    this.remove.emit(conta);
  }

}
