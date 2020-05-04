import { Component, OnInit } from '@angular/core';
import { PaintingService } from '../services/painting.service';
import { Paintings } from '../models/paintings';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.css']
})
export class PaintingsComponent implements OnInit {
  paintings: Paintings[];

  constructor(private paintingService:PaintingService) {
  }

  ngOnInit() {
    this.getPaintings();
  }

  getPaintings() {
    this.paintingService.getPaintings().subscribe( (paintings: Paintings[]) => {
      this.paintings = paintings;
    })
  }
}
