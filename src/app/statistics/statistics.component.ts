import { Component, OnInit } from '@angular/core';
import { PaintingService } from '../services/painting.service';
import { Paintings } from '../models/paintings';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  baroque: Paintings[];
  impr: Paintings[];
  modern: Paintings[];
  total = 0;
  oldestB: Paintings[] = null;
  oldestI: Paintings[] = null;
  oldestM: Paintings[] = null;
  expensiveB: Paintings[] = null;
  expensiveI: Paintings[] = null;
  expensiveM: Paintings[] = null;

  constructor(private paintingService:PaintingService) { }

  oldest() {
    console.log(this.baroque);
    /*this.oldestB = this.baroque.sort(function (a, b) {return a.year - b.year});
    this.impr = this.impr.sort(function (a, b) {return a.year - b.year});
    this.modern = this.modern.sort(function (a, b) {return a.year - b.year}); 
    this.oldestB = this.baroque.slice(0, 3);
    this.oldestI = this.impr.slice(0, 3);
    this.oldestM = this.modern.slice(0, 3);*/
  }

  expensive() {
    this.baroque = this.baroque.sort(function (a, b) {return a.price - b.price});
    this.impr = this.impr.sort(function (a, b) {return a.price - b.price});
    this.modern = this.modern.sort(function (a, b) {return a.price - b.price}); 
    this.expensiveB = this.baroque.slice(0, 3);
    this.expensiveI = this.impr.slice(0, 3);
    this.expensiveM = this.modern.slice(0, 3);
  }

  ngOnInit() {
    this.paintingService.getByStyle('baroque')
      .subscribe( (paintings: Paintings[] ) => {
        this.baroque = paintings;
        console.log(this.baroque);
      }, error => {alert('Could not retrieve paintings')});
    this.paintingService.getByStyle('modernist')
      .subscribe( (paintings: Paintings[] ) => {
        this.modern = paintings;
      }, error => {alert('Could not retrieve paintings')});
    this.paintingService.getByStyle('impressionist')
      .subscribe( (paintings: Paintings[] ) => {
        this.impr = paintings;
      }, error => {alert('Could not retrieve paintings')});
    this.oldest();
    console.log(this.baroque);
  }

}
