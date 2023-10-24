

import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, NonNullableFormBuilder } from "@angular/forms";
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
    private snackBar: MatSnackBar,
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      name: [""],
      category: [""],
      dinheiroTotal: [""],
    });
  }

  ngOnInit() {
    this.subscriptions.push(
      this.activatedRoute.data.subscribe({
        next: (data: Data) => {
          this.form = this.formBuilder.group({
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
      .subscribe((result) => console.log(result));
    this.router.navigate(["/contas"]);
  }

  onCancel() {
    this.router.navigate(["/contas"]);
  }

  private onError() {
    this.snackBar.open("ERROR EM SALVAR A CONTA", " ", { duration: 3000 });
  }
}
