//_________step1____________
class point {
    a; //compiler not compiles uninitiaize variables, to compile it without initializ use ! mark
    b;
}
const pt = new point();
pt.a = 1;
pt.b = 2;
pt.a = 4; //we can hange values of x and y anytime.
console.log("x: " + pt.a, "y: " + pt.b);
//___________step2___________________
// class point{
//     x!: number;
//     y!: number;
//     constructor(z:number , a:number)
//     {
//         this.x = z;
//         this.y = a;
//         console.log("x: " +this.x ,"y: "+ this.y )
//     }
// }
// const pt = new point(2,4);
//______________________constructor__________________
class welcome {
    c;
    constructor() {
        this.c = "Hikmat";
        console.log(this.c + "  welcome to the constructor");
    }
}
const obj1 = new welcome();
//________________READONLY_____________________
class Rdonly {
    d; // now this can only be chnge with in the class constructor , but we can't change it from outside the class by class object
    e;
    constructor(z, a) {
        this.d = z;
        this.e = a;
        console.log("x: " + this.d, "y: " + this.e);
    }
}
const ro = new Rdonly(2, 4);
export {};
//ro.d = 6 ; // here this give an error because we this is readonly
//_______________________Opetional perameters__________________
// class opetper{
//      d!: number;        
//     e!: number;
//     constructor( z?:number )
//     {
//         if( z != "undefined" )
//         {
//             this.d = z;
//       
//         }
//         console.log("x: " + this.d ,"y: "+ this.e )
//     }
// }
// const optpr = new opetper();
