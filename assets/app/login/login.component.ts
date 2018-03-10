import { Component } from '@angular/core';
import { userService } from '../user.service';
import { User } from '../models/user.model';
import { error } from 'util';
import { AuthService } from '../auth/auth.service';
import {NgForm} from '@angular/forms';


@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers:[userService,AuthService]
})
export class loginComponent {
    

    constructor(private userService:userService,private authService : AuthService){}

    onSave(f:NgForm){
        let k=(f.value);
     const user =new User(k.username,k.password);
     console.log(f);
     /*   this.userService.addUser(user)
        .subscribe(
          data => console.log(data),
          error =>console.error(error),
          );
          */
         this.authService.signUp(user)
         .subscribe(
           data => console.log(data),
           error =>console.error(error),
           );
        
    }

}