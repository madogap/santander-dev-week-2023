import { Component, OnInit } from '@angular/core';
import { Conta } from '../model/conta';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.scss']
})
export class ContasComponent implements OnInit {

  contas: Conta[]=[
    {_id:'1', name: 'Marcus', category: 'Pf'}
  ];
  displayedColumns = ['name', 'category'];

  ngOnInit(): void {
    throw new Error('Method not implemented.');

  }

}
