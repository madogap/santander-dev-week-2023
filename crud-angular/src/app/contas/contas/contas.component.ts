import { Component, OnInit } from '@angular/core';
import { Conta } from '../model/conta';
import { ContasService } from '../services/contas.service';
import { Observable, catchError, of } from 'rxjs';

import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.scss'],

})
export class ContasComponent implements OnInit {

  //contas:Observable<Conta[]> | undefined;
  //contas: Conta[] = [];
  //contasService:ContasService;


  contas: Conta[] = [];


  //contasService:ContasService;

  constructor(
    private contasService: ContasService,
    public dialog: MatDialog,
    private router:Router,
    private route: ActivatedRoute
    ){

    //this.contasService= new ContasService();

    this.contasService.list().
    pipe(
      catchError(error=>{
        this.onError('Erro ao carregar a lista de Contas');
          return of([])
      })).subscribe(response => {this.contas =response});
  }

  ngOnInit(): void {
    this.fetchContas();
  }

  fetchContas() {
    this.contasService.list().subscribe(
      (response) => {
        this.contas = response;
      },
      (error) => {
        this.onError('Erro ao carregar a lista de Contas');
      }
    );
  }

  onError(erroMsg: string){
    this.dialog.open(ErrorDialogComponent, {
        data: erroMsg
    });
  }


  onAdd(){
    //this.router.navigate(['/contas/new'], {relativeTo: this.route});
    this.router.navigate(['new'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
    console.log("Vamos continuar aprendendo");
  }
  onEdit(conta:Conta){
    this.router.navigate(['edit', conta._id], {relativeTo: this.route});
  }

}
