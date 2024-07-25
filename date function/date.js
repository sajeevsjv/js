function putzero(value){
    return value < 10 ? "0"+value : value;
}
function show(){
    let dt = new Date();
    console.log("date",dt);

    let hours = dt.getHours();
    console.log(hours);

    let ampm = hours < 12 ? "am" : "pm";
    console.log(ampm);

    let time = document.getElementById("time");
    time.innerHTML = putzero(hours) +":"+ putzero(dt.getMinutes()) +":"+ putzero(dt.getSeconds());
    setTimeout(show,1000);


}
show();