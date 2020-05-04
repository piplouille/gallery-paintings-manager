import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paintings } from '../models/paintings';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {
  private paintings: Paintings[];

  constructor(private http: HttpClient) {
  }

  getPaintings() {
    return this.http.get('http://localhost:3000/paintings');
  }
}
