import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Conta } from '../model/conta';
import { Observable, delay, first, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContasService {


  private readonly API: string = 'http://localhost:8080/api/contas';

  constructor(private httpClient:HttpClient){}

  list(): Observable<Conta[]> {
      return this.httpClient.get<Conta[]>(this.API)
        .pipe(
          first(),
          tap(contas=>console.log(contas)));
  }

  save(record:Partial<Conta>){
    console.log(record);
    return this.httpClient.post<Conta>(this.API, record);

  }

}
