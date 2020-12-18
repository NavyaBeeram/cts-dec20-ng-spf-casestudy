import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {FormControl, FormBuilder,FormGroupDirective, NgForm, Validators} from 
             '@angular/forms';
@Component({
  selector: 'app-registration-from',
  templateUrl: './registration-from.component.html',
  styleUrls: ['./registration-from.component.css']
})
export class RegistrationFromComponent  {

  FirstName: string = undefined;
  LastName : string = undefined;
  address:  string  = undefined;
  contact:  string  = undefined;
  email:    string  = undefined;
  password: string   = undefined;
  cpassword:string  = undefined;
  constructor(private _router : Router){
      
  }
  home(){
  this._router.navigate([""]);
  }
  handleFormValues(formValues : any) {
    console.log(formValues);
    
    this._router.navigate(["insurance"]);
  
  }
  }


