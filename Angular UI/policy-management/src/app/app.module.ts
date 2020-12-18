import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFromComponent } from './registration-from/registration-from.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';
import {FormsModule} from '@angular/forms';





let routes: Routes = [
 
  {path :"",component:LoginFormComponent},
  {path :"register",component:RegistrationFromComponent},
  {path :"",component:LoginFormComponent},
  {path : "insurance", component:InsuranceDetailsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistrationFromComponent,
    InsuranceDetailsComponent,
   
    
  
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
