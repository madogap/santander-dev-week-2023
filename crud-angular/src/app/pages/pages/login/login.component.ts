import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username:string="";
  password:string="";
  mensagemLogin:string="";

  constructor(){

  }

  btnLogin():void{
    if (this.username == "admin" && this.password == "admin") {
      this.mensagemLogin='Correto';
    } else {
      this.mensagemLogin='Incorreto';
    }
  }

}
