import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Observable, of } from 'rxjs';
import { Paintings } from '../models/paintings';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {
  private paintings: Paintings[];
  tablePaintings = 'http://localhost:3000/paintings';
  SERVER_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  getPaintings() {
    return this.http.get(this.tablePaintings);
  }

  getByAuthorId(id:number):Observable<any> {
    if (id <= 0) {
      return of([]);
    }
    return this.http.get(`${this.SERVER_URL}paintings?author_id=${id}`);
  }

  postPainting(painting:Paintings): any {
    return this.http.post(`${this.SERVER_URL}paintings`, painting)
  }
}
