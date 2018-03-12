export class Class{
    classid:String;
    students:[Number];
    standard:Number;
    section:String;

    constructor(classid:String,standard:Number,section:String){
        this.classid=classid;
        this.standard=standard;
        this.section=section;
    }
}