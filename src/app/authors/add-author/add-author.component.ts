import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  @Output() productUpdate: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private authorService:AuthorService) { }

  ngOnInit(): void {
  }

  processForm(form) {
    if(form.invalid){
      alert("Baddddd")
      return;
    }

    this.authorService.postAuthor(form.value).subscribe(p=>{
      // we need to notify the product list component to updated
      this.productUpdate.emit(true);
    },
    error=> {
      alert("Product could not be posted")
    }
    )
  }
}
