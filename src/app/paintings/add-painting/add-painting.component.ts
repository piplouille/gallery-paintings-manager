import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaintingService } from 'src/app/services/painting.service';

@Component({
  selector: 'app-add-painting',
  templateUrl: './add-painting.component.html',
  styleUrls: ['./add-painting.component.css']
})
export class AddPaintingComponent implements OnInit {
  @Output() productUpdate: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor(private paintingService:PaintingService) { }

  ngOnInit(): void {
  }

  processForm(form) {
    if(form.invalid){
      alert("Baddddd")
      return;
    }

    this.paintingService.postPainting(form.value).subscribe(p=>{
      // we need to notify the product list component to updated
      this.productUpdate.emit(true);
    },
    error=> {
      alert("Product could not be posted")
    }
    )
  }

}
