let req = new XMLHttpRequest;
console.log(req);

req.open("get","https://fakestoreapi.com/products");
function loaddata (){
    req.send();
    req.onreadystatechange = function(){
        console.log("readystate :",req.readyState);
        if(req.readyState === 4){
            console.log("status:",req.status);
            let response = req.response;
            let result = JSON.parse(response);
            console.log(result);
            let div = document.getElementById        }
       
    }
    
}