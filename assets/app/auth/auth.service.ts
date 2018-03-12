import { User } from "../models/user.model";
import {Student } from "../models/student.model";
import {Class } from "../models/class.model";
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';
@Injectable()
export class AuthService{

constructor(private http:Http){ }

private students:Student[ ] =  [ ];

    signUp(user:User){
        const body = JSON.stringify(user);
        const header = new Headers({'Content-Type':'application/json'})
           return this.http.post('http://localhost:3000/user',body,{headers:header})
           .map((response:any)=> response.json())
           ._catch((err:Response)=> Observable.throw(err.json())
    );
    }

    signIn(user:User){
        console.log(user.password);
        const body = JSON.stringify(user);
        const header = new Headers({'Content-Type':'application/json'})
           return this.http.post('http://localhost:3000/user/signin',body,{headers:header})
           .map((response:any)=> response.json())
           ._catch((err:Response)=> Observable.throw(err.json())
    );

    }

    StudentsignUp(user:Student){
        const body = JSON.stringify(user);
        const header = new Headers({'Content-Type':'application/json'})
           return this.http.post('http://localhost:3000/student',body,{headers:header})
           .map((response:any)=> response.json())
           ._catch((err:Response)=> Observable.throw(err.json())
    );
    }

    classsignUp(newclass:Class){
        const body = JSON.stringify(newclass);
        const header = new Headers({'Content-Type':'application/json'})
           return this.http.post('http://localhost:3000/class',body,{headers:header})
           .map((response:any)=> response.json())
           ._catch((err:Response)=> Observable.throw(err.json())
    );
    }

    getStudents(){
        return this.http.get('http://localhost:3000/student')
        .map((response:any)=>{
            const students = response.json().obj;
            let obtainedstudents : Student[] = [];

        for (let stud of students){
            obtainedstudents.push(new Student(stud.studentid,stud.name,stud.fathersname,stud.mothersname,stud.dateofbirth,stud.gender,stud.age,stud.phonenumber,stud.classid));  
        }
        this.students=obtainedstudents;
        return obtainedstudents;
        }).catch((err:Response)=> Observable.throw(err.json()));
    }l
}