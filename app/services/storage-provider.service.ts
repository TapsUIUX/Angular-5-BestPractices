import { Injectable } from '@angular/core';

@Injectable()
export class StorageProviderService {

  constructor() { }


 setItem(key,value){
   let type = typeof(value);
   if (value) {value = JSON.stringify(value); }
   sessionStorage.setItem(key, value);
    }

  getItem(key) {
       let item = sessionStorage.getItem(key);
        try { item = JSON.parse(item);} catch (e) {}
        return item;
      }


}
