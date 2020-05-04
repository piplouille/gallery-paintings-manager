import { Component, OnInit } from '@angular/core';
import { Paintings } from '../../models/paintings';
import { PaintingService } from '../../services/painting.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  author_id: number;
  paintings: Paintings[];
  routeSub: Subscription;

  constructor(private paintingService:PaintingService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute
    .paramMap
    .subscribe((params) => { // we subscribe to the activated route observable
      console.log(params);
      this.author_id = parseInt(params.get("id"));
    })

  this.paintingService.getByAuthorId(this.author_id)
    .subscribe((paintings:Paintings[])=>{
      this.paintings = paintings;
    });
  }
}
