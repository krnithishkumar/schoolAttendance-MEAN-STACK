import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { HttpModule } from '@angular/http';
import { loginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { studentSignupComponent } from './studentSignup/studentSignup.component';
import { facultySignupComponent } from './facultysignup/facultysignup.component';
import { classManagementComponent } from './classManagement/classManagement.component';

@NgModule({
    declarations: [AppComponent,
                loginComponent, 
                studentSignupComponent,
                facultySignupComponent,
                classManagementComponent],
    imports: [BrowserModule,
              FormsModule,
              HttpModule 
],
    bootstrap: [AppComponent]
})
export class AppModule {

}