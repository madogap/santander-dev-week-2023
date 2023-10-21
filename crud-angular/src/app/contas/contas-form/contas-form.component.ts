import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { ContasService } from '../services/contas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contas-form',
  templateUrl: './contas-form.component.html',
  styleUrls: ['./contas-form.component.scss']
})
export class ContasFormComponent implements OnInit {

  form = this.formBuilder.group({
    name:[''],
    category:[''],
    dinheiroTotal:[0]})

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: ContasService,
    private snackBar: MatSnackBar,
    private location: Location
  ){}
  ngOnInit(): void {}

  onSubmit(){
    console.log("Salvando fazendo o POST");
    this.service.save(this.form.value)
    .subscribe(result => console.log(result));

  }

  onCancel(){

    console.log("Cancelando");
  }


  private onError(){
    this.snackBar.open("ERROR EM SALVAR A CONTA", ' ',{duration:3000})};

}
