import { Injectable, OnInit } from '@angular/core';
import { Todo } from '../Mocks/Todo';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private url: string = 'http://localhost:5000/todo/all';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
    // .pipe(
    //   catchError(this.handleError<Todo[]>('getTodo', []))
    // );
  }

  // private handleError<T>(operation = 'operation', result?: T){
  //   return (error: T): Observable<T> => {

  //     console.error(error);

  //     return of(result as T);
  //   }
}
