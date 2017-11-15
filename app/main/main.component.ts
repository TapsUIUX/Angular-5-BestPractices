import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { ErrorHandlerService } from '../services/error-handler.service';
import { StorageProviderService } from '../services/storage-provider.service';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    userInfo:any;
    userInfoFromStorage:any;
    fromVal:number = 0;
    toVal:number = 10;
    storageLength:Array<number>;

  constructor( private _getService:GetDataService, private _storage:StorageProviderService, private _error: ErrorHandlerService) { }

  ngOnInit() {
    // if not in session storage Hit the server
    if( !sessionStorage.hasOwnProperty( 'data' )){
      this._getService.getData().subscribe( (data)=> {
        //sessionStorage.setItem('data', JSON.stringify( data ));
         this._storage.setItem('data',data);
        //this.userInfoFromStorage = JSON.parse(sessionStorage.getItem('data'));
        this.userInfoFromStorage =  this._storage.getItem('data');

        this.userInfo = this.userInfoFromStorage.slice(this.fromVal,this.toVal)  ;

        let divNum = Math.floor(this.userInfoFromStorage.length/10)
        this.storageLength = Array(divNum).fill(0).map((el,id,ar)=>(id+1))

        console.log("fetched from DB  .....") },
        // accesing   HttpErrorResponse Object and displaying a value
        (err : HttpErrorResponse)=>{this._error.handleError(err)}

       )
    }else{
     //Session Storage Setting to avoid Server Hit on Pagination
      console.log("fetched from storage .....")
      //this.userInfoFromStorage  = JSON.parse(sessionStorage.getItem('data'));
      // moved the logic to Service to Reuse when ever we need it.
      this.userInfoFromStorage =  this._storage.getItem('data');
      this.userInfo = this.userInfoFromStorage.slice(this.fromVal,this.toVal)

      let divNum = Math.floor(this.userInfoFromStorage.length/10)
      this.storageLength = Array(divNum).fill(0).map((el,id,ar)=>(id+1))

    }
   //PAGINATION SETTINGS
    // if( sessionStorage.hasOwnProperty( 'data' )){
    //   let divNum = Math.floor(this.userInfoFromStorage.length/10)
    //   this.storageLength = Array(divNum).fill(0).map((el,id,ar)=>(id+1))
    //   //console.log(this.storageLength)
    // }




     this._getService.postDataRest().subscribe( (data)=> {console.log("data from post :" ,data)});
     this._getService.getDataForId().subscribe( (data)=> {console.log("dataforId : ",data)});
     this._getService.getDataForSingleId().subscribe( (data)=> {console.log("datafor single ID : ",data)});











   }
 // When Event is en=mmited from Pagination componet Do This
   onPageClicked(event){
    this.fromVal= Number(event)*10 - 10;
    this.toVal= this.fromVal+10;
    this.userInfo = this.userInfoFromStorage.slice(this.fromVal,this.toVal)
   }

  onEventRaisedFromList(event){
      //console.log("from main component : ", event)
      this.sortTheData(event);
    }

sortTheData(event){
  let x = event.sortName;
  let y = event.sortOrder;
  if (x == 'id'){
    this.userInfo.sort((a,b)=>{ return (y)? Number(a.id)-Number(b.id) : Number(b.id)-Number(a.id);  })
  }
  if (x == 'title'){
    this.userInfo.sort((a,b)=>{
       if (y){return (a.title < b.title)? 1 : (a.title > b.title)? -1 : 0 ;}
       if (!y){return (a.title > b.title)? 1 : (a.title < b.title)? -1 : 0;}
    })
  }

}

}
