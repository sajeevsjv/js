for(let i=0;i<10;i++){
    console.log("hello world");
}

let a=1;
while(a<10){
    console.log("hello");
    a++;
}

let c=4;
do{
    console.log("do stmnt");
    c++;
}
while(c<4){
    console.log("secnd stmnt");
}

let str='';
for(let i=0;i<10;i++){
    for(j=0;j<i;j++){
        str=(str + "*");
    }
    str=str+"\n";
}
console.log(str);