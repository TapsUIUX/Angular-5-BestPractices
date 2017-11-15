import { Component, OnInit,Input ,EventEmitter, Output,ChangeDetectionStrategy} from '@angular/core';
// Change detection strategy only when whole input changes
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {
 // geting data to generate pagination dynamically
 @Input() storageLength ;
// emiting the clicked page
 @Output() page_clicked_e = new EventEmitter();

 clickedPage:number;

  constructor() { }

  ngOnInit() {
  }

  onPageClick(val){
    //console.log( val );
    //this.clickedPage = val;
    //emiting the pagination page to be used to sot the data further in
    //trandsaction page
    this.page_clicked_e.emit(val);

  }

}
