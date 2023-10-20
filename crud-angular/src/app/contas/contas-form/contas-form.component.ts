import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContasService } from '../services/contas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contas-form',
  templateUrl: './contas-form.component.html',
  styleUrls: ['./contas-form.component.scss']
})
export class ContasFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ContasService,
    private snackBar: MatSnackBar
    ){
    this.form= formBuilder.group({
      name:[null],
      category:[null],
      dinheiroTotal:[null]
    });
  }
  ngOnInit(): void {}

  onSubmit(){
    console.log("Salvando fazendo o POST");
    this.service.save(this.form.value)
      .subscribe(result => console.log(result), error => this.onError());

  }

  onCancel(){
    console.log("Cancelando");
  }
  private onError(){
    this.snackBar.open("ERROR EM SALVAR A CONTA", '',{duration:3000})};

}
