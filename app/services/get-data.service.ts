import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders,HttpParams } from '@angular/common/http';

@Injectable()
export class GetDataService {
   data:any;
   dataRest:any;
   dataForId:any;
   dataforSingle:any;
   datapost:any = {
     "userId": 1,
    "id": 1,
    "title": "Taps Dummy",
    "body": "dummy data are here"}

  constructor( private _http:HttpClient ) {
  
   let postdata = JSON.stringify(this.datapost);
     
  }
  getData(){
    return  this._http.get("https://jsonplaceholder.typicode.com/posts");
  }

  postDataRest(){
    return  this._http.post("https://jsonplaceholder.typicode.com/posts", postdata
   //, { headers: new HttpHeaders().set('Authorization', "*")}
    );
   
  }

 getDataForId(){
   return  this._http.post("https://jsonplaceholder.typicode.com/posts",postdata,{
  params: new HttpParams().set('id', '1003'),

    // String notEncoded = "Basic " + user + ":" + password;
    // String encodedAuth = Base64.getEncoder().encodeToString(notEncoded.getBytes());
    // HttpHeaders headers = new HttpHeaders();
    // headers.setContentType(MediaType.APPLICATION_JSON);
    // headers.add("Authorization", encodedAuth);
    // return headers;


   });
 }

 getDataForSingleId(){
   return this._http.get("https://jsonplaceholder.typicode.com/posts",{
     params: new HttpParams().set('id', '100'),   });
 }

}


// import 'rxjs/add/operator/catch';
// return this.http.request(request)
//   .map(res => res.json())
//   .subscribe(
//     data => console.log(data),
//     err => console.log(err),
//     () => console.log('yay')
//   );


//Examples
// const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
//       title: 'foo',
//       body: 'bar',
//       userId: 1
//     })
//       .subscribe(
//         res => {
//           console.log(res);
//         },
//         err => {
//           console.log("Error occured");
//         }
//       );
