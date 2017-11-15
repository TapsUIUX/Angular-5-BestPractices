import { Injectable ,ErrorHandler} from '@angular/core';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {

  handleError(err){
    if(sessionStorage.hasOwnProperty('errorlog')){
      let LogArray = Array.from( sessionStorage.getItem('errorLog'));
      let time = new Date();
      LogArray.push(err + "time");
    }else{
      sessionStorage.setItem('errorLog',err)
    }
    console.log("Error Log From EServ : ",err );
    return "Error Log From EServ : "+err ;
  }


  constructor() { }

}
