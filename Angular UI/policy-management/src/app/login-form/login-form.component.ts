import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent  {

  id:string=undefined;
  password:string=undefined;
  handleFormValues(formValues : any){
    console.log(formValues);
  }
    constructor(private _router : Router){
      
    }
    home(){
    this._router.navigate([""]);
    }
}