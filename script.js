//call by value
function a(x){
    x=10;
    console.log("x inside function",x);
}
let x=20;
console.log(x);
a(x);
console.log(x);

//call by reference
let arr=[1,2,3,4];
console.log(arr);

function b(arr){
    arr[0]=20;
    console.log(arr);
}
b(arr);
console.log(arr);