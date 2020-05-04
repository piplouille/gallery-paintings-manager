import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { Authors } from '../models/authors';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: Authors[];

  constructor(private authorService:AuthorService) { }

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors() {
    this.authorService.getAuthors().subscribe( (authors: Authors[]) => {
      this.authors = authors;
    })
  }
}
