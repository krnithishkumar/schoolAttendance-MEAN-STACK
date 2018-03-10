export class Student{
    studentid : String;
    name:String;
    fathersname:String;
    mothersname:String;
    dateofbirth:Date;
    gender:String;
    age:Number;
    phonenumber:String;
    classid:String;

    constructor(studentid:String,name:String,fathersname:String,mothersname:String,dateofbirth:Date,gender:String,age:Number,phonenumber:String,classid:String){
        this.studentid=studentid;
        this.fathersname=fathersname;
        this.mothersname=mothersname;
        this.phonenumber=phonenumber;
        this.dateofbirth=dateofbirth;
        this.age=age;
        this.gender=gender;
        this.name=name;
        this.classid=classid;
    }
}