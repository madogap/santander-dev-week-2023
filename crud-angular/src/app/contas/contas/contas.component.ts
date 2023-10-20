import { Component, OnInit } from '@angular/core';
import { Conta } from '../model/conta';
import { ContasService } from '../services/contas.service';
import { catchError, of } from 'rxjs';
import { Dialog } from '@angular/cdk/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';



@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.scss'],

})
export class ContasComponent implements OnInit {

  contas: Conta[] = [];

  displayedColumns = ['name', 'category', 'dinheiroTotal', 'actions'];
  //contasService:ContasService;

  constructor(
    private contasService: ContasService, public dialog: Dialog){
    //this.contasService=new ContasService();
    this.contasService.list().
    pipe(
        catchError(error=>{
          this.onError('Erro ao carregar a lista de Contas');
          return of([])
        })
      ).subscribe(
  response => {
this.contas = response;
}
);
    //this.contas = this.contasService.list();
  }

  onError(erroMsg: string){
    this.dialog.open(ErrorDialogComponent, {
        data: erroMsg
    });
  }
  ngOnInit(): void {


    throw new Error('Method not implemented.');

  }

}
