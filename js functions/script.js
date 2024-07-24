//named function
function func1(){
    console.log("named function");
}
func1();

//anonymous function
const a = function (){
    console.log("anonymous function");

}
a();

//arrow functions
const b = () =>{
    console.log("arrow function");
}
b();


//function with params and return
function param(c,d){
    console.log("num 1 :",c);
    console.log("num 2 :",d);
    return c+d;

}
let e= param(2,3);
console.log(e);


//callback function
function callBack (xyz,f){
    xyz();
    console.log("num",f);
    

}
