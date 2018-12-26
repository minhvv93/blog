import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  private data;

  setData(data){
    this.data = data;
  }
  getdata(){
    let email = this.data;
    //console.log(email);
   return email;
  }
  seturl(){
     let sr = "http://68.183.183.83"
  }

}
