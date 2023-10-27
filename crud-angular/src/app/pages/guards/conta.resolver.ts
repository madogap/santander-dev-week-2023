import { Injectable } from '@angular/core';
import {
  Route, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ContasService } from '../services/contas.service';
import { Conta } from '../model/conta';


@Injectable({
  providedIn: 'root'
})
export class ContaResolver implements Resolve<Conta> {

  constructor(private service: ContasService){}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Conta> {

    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }

    return of({_id:'', name:'', category:'',  dinheiroTotal:''});
  }
}
