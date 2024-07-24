//getElementById
let a = document.getElementById('box');
console.log(a);
let txt_content = a.textContent;
console.log(txt_content);
a.textContent = 'sajeeeeeeeeeeeev';

//getElementByClass
let b = document.getElementsByClassName("container");
console.log(b);
console.log(b[0].textContent);

//getElementByTagName
let c= document.getElementsByTagName('p');
console.log(c);
console.log(c[2].textContent);


