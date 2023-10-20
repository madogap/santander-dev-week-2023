import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contas-form',
  templateUrl: './contas-form.component.html',
  styleUrls: ['./contas-form.component.scss']
})
export class ContasFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form= formBuilder.group({
      name:[null],
      category:[null],
      dinheiroTotal:[null]
    });
  }
  ngOnInit(): void {}
  onSubmit(){console.log("Salvando fazendo o PUT");}
  onCancel(){console.log("Cancelando");}
}
