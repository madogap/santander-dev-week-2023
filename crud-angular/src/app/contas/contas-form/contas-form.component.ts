import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { ContasService } from '../services/contas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contas-form',
  templateUrl: './contas-form.component.html',
  styleUrls: ['./contas-form.component.scss']
})
export class ContasFormComponent  {

  form: FormGroup;




  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: ContasService,
    private snackBar: MatSnackBar,
    private location: Location,
     private router: Router
  ){

    this.form = this.formBuilder.group({
    name:[''],
    category:[''],
    dinheiroTotal:[]
    })

  }


  onSubmit(){
    console.log("Salvando fazendo o POST");
    this.service.save(this.form.value).subscribe(
      (result) => console.log(result));
        this.router.navigate(['/contas']);

  }

  onCancel(){

    console.log("Cancelando");
    this.router.navigate(['/contas']);
  }


  private onError(){
    this.snackBar.open("ERROR EM SALVAR A CONTA", ' ',{duration:3000})};

}
