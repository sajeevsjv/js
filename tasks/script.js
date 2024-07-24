//numbers up to 10
for(let j=1;j<=10;j++){
    console.log(j)
}




//sum of numbers from 1 to 10
console.log("\n\n")
let sum=0;
for(let i=0;i<=10;i++){
    sum=sum+i;
}
console.log("sum of numbers from 1 to 10:", sum);


//even numbers
console.log("\n\n");
for(let e=1;e<20;e++){
    if(e%2==0){
        console.log(e);
    }
}


//pattern
console.log("\n\n")
let str='';
for(let b=5;b>0;b--){
    for(let c=0;c<b;c++){
        str=(str+"*");
    }
    str=str+"\n";
}
console.log(str);



//pattern
console.log("\n\n");
let x='' ;
for(let k=1;k<=5;k++){
    for(let l=1;l<=k;l++){
        x=x+l;
    }
    x=x+"\n";
}
console.log(x);

let strr="sajeev";
let len=(strr.length);
for(let s=0;s<len;s++){
    let arr=["a","e","i","o"]
    for(let v=0;v<arr.length;v++){
        console.log(arr[v]);
    }
    // if(strr[s]=="a" || "e"){
    //     console.log(strr[s])
    // }
   

}



