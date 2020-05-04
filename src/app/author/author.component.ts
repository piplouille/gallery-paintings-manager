import { Component, OnInit, Input } from '@angular/core';
import { Authors } from '../models/authors';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  @Input() author:Authors;

  constructor(private authorService:AuthorService) { }

  ngOnInit(): void {
  }

}
