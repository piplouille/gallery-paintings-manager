import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authors } from '../models/authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private authors: Authors;

  constructor(private http: HttpClient) { }

  getAuthors() {
    return this.http.get('http://localhost:3000/authors');
  }
}
