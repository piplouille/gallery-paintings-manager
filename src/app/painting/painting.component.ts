import { Component, OnInit, Input } from '@angular/core';
import { Paintings } from '../models/paintings';
import { PaintingService } from '../services/painting.service';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.css']
})
export class PaintingComponent implements OnInit {
  @Input() painting:Paintings;

  constructor(private paintingService:PaintingService) { }

  ngOnInit(): void {
  }
}
