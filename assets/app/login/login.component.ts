import { Component,OnInit,ViewChild} from '@angular/core';
import { userService } from '../user.service';
import { User } from '../models/user.model';
import { error } from 'util';
import { AuthService } from '../auth/auth.service';
import {NgForm} from '@angular/forms';
import { Student } from '../models/student.model';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers:[AuthService]
})
export class loginComponent implements OnInit{

    students : Student[];

    @ViewChild('f') f:NgForm;

    ngOnInit(){
        this.authService.getStudents()
        .subscribe(
            (obtainedstudents:Student[])=>{
                this.students=obtainedstudents;
            }
        ); 
    }

    constructor(private authService : AuthService){}

    onSave(f:NgForm){
        
        console.log(f.value.username);
        console.log(f.value.password);
        const tuser  = new User(f.value.username,f.value.password,'',new Date(),'','','');

        this.authService.signIn(tuser)
        .subscribe(
            data => {
                  localStorage.setItem('token',data.token);
                  localStorage.setItem('userID',data.userID);   
                    console.log('success'); 
                },
            error => console.log(error)
        );
        this.f.reset();
      /*  for(let stud of this.students){
            console.log(stud.name);
        }
        */
    }
}