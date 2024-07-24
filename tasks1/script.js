//factorial 
let num=1;
function fact(a){
    for(let i=1;i<=a;i++){
       num=num*i;
    }
    return num;  
}
let x=5;
let k=fact(x);
console.log(`factorial of ${x} :`,k);


//smallest number
let arr=[2,5,6,1,0,9];
let sm=arr[0];
for(i=1;i<arr.length-1;i++){
    if(sm<i){
        sm=sm;
    }
    else{
        sm=i;
    }
    console.log(sm);
    
}

