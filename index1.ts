
//_________step1____________

class point{
    a!: number;         //compiler not compiles uninitiaize variables, to compile it without initializ use ! mark
    b!: number;
    
}

const pt = new point();
pt.a = 1;
pt.b = 2;
pt.a = 4;                                           //we can hange values of x and y anytime.
console.log("x: " +pt.a ,"y: "+ pt.b )

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

class welcome{
    c!: string;
    constructor()
    {
        this.c = "Hikmat";
        console.log(this.c + "  welcome to the constructor");
    }
}

const obj1 = new welcome();

//________________READONLY_____________________

class Rdonly{
        readonly d!: number;        // now this can only be chnge with in the class constructor , but we can't change it from outside the class by class object
        e!: number;
        constructor(z:number , a:number) //consructor
        {
            this.d = z;
            this.e = a;
            console.log("x: " + this.d ,"y: "+ this.e )
        }
    }
    
    const ro = new Rdonly(2,4); 
    //ro.d = 6 ; // here this give an error because we this is readonly

//_______________________Opetional perameters__________________
// class opetper{
//      d!: number;        
//     e!: number;
//     constructor( z?:number , a?:number)
//     {
//         if( (z != "undefined") && (a!= "undefined"))
//         {
//             this.d = z;
//             this.e = a;

//         }
        
//         console.log("x: " + this.d ,"y: "+ this.e )
//     }
// }

// const optpr = new opetper();

//___________________Constructor overloading________________________



//________________Derived classs___________________________________


//------------- variable scppe----------------------------------


//__________----------------- getter/setter (encapsulation)--------------------