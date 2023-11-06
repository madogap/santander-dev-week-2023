

import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, NonNullableFormBuilder, UntypedFormArray, Validators } from "@angular/forms";
import { ContasService } from "../services/contas.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router, ActivatedRoute, Data } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-contas-form",
  templateUrl: "./contas-form.component.html",
  styleUrls: ["./contas-form.component.scss"],
})
export class ContasFormComponent implements OnInit, OnDestroy {
  form: FormGroup;

  private subscriptions: any[] = [];
  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: ContasService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private location: Location,
  ) {
    this.form = this.formBuilder.group({
      _id: [null],
      name: ["",[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),

      ]],
      category: [""],
      dinheiroTotal: [""],
    });
  }

  ngOnInit() {
    this.subscriptions.push(
      this.activatedRoute.data.subscribe({
        next: (data: Data) => {
          this.form = this.formBuilder.group({
            _id: data['conta']['_id'],
            name: data['conta']["name"],
            category: data['conta']["category"],
            dinheiroTotal: data['conta']["dinheiroTotal"],
          });
        },
      })
    );
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  onSubmit() {
    this.service
      .save(this.form.value)
      .subscribe((Data) => console.log(Data));
    this.router.navigate(["/contas"]);

  }

  onCancel() {
    this.location.back();
  }

  private onError() {
    this.snackBar.open("ERROR EM SALVAR A CONTA", " ", { duration: 3000 });
  }

  private onSucess(){
    this.snackBar.open("Conta salva com sucesso", " ", { duration: 3000 });
    this.onCancel();
  }

  removeConta(index: number) {
    const contas = this.form.get('contas') as UntypedFormArray;
    contas.removeAt(index);
  }
}
