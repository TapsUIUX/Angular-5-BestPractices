import { Component, OnInit,Input ,ChangeDetectionStrategy} from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent implements OnInit {

  @Input() userInfo:any ;

  constructor() {
   }

  ngOnInit() {
  }

}
