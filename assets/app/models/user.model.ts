export class  User{
    staffid : string;
    password : string;
    name:String;
    dateofbirth:Date;
    gender:String;
    email:String;
    phonenumber:String;

    constructor(staffid:string,password:string,name:String,dateofbirth:Date,gender:String,email:String,phonenumber:String){
        this.staffid=staffid;
        this.password=password;
        this.name=name;
        this.dateofbirth=dateofbirth;
        this.gender=gender;
        this.email=email;
        this.phonenumber=phonenumber;
    }
}