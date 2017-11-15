import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 @Output() sort_request = new EventEmitter();

 arrow:boolean;
 arrowname:string;
  constructor() { }

  ngOnInit() {
  }

 onClick(val){
 //console.log( "from navbar component : ",val)
 this.arrow = (this.arrow)?!this.arrow:true;
 this.arrowname=val;
 this.sort_request.emit({sortName:this.arrowname , sortOrder : this.arrow});
}
}
