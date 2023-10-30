import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Conta } from '../model/conta';
import { Observable,first, tap } from 'rxjs';
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
          tap(contas=>console.log(contas))
    );
  }

  loadById(id:string):Observable<Conta> {
    return this.httpClient.get<Conta>(`${this.API}/${id}`);
  }

  save(record:Partial<Conta>):Observable<Conta> {
    debugger
    console.log(record);

    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record:Partial<Conta>):Observable<Conta> {
    return this.httpClient.post<Conta>(this.API, record).pipe(first());
  }

  private update(record:Partial<Conta>):Observable<Conta> {
    return this.httpClient.patch<Conta>(`${this.API}/${record._id}`, record);
  }

  remove(_id: string) {
    return this.httpClient.delete(`${this.API}/${_id}`);
  }

}
