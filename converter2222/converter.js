function convert() {
    const input_num = document.getElementById("input_num").value;
    const covType = document.getElementById("hopt_opt1").value;
    const conType = document.getElementById("hopt_opt2").value;
    let result;
    //miles
    if (covType == "miles" && conType == "km") {
        result = input_num * 1.60934;
      
    }else if(covType=="km"&&conType=="miles"){
        result = input_num / 1.60934;
    }else if( covType=="miles"&&conType=="cm"){
        result=input_num*160934.4;
    }
    else if( covType=="cm"&&conType=="miles"){
        result=input_num*6.2137E-6;
    }
    else if( covType=="miles"&&conType=="inch"){
        result=input_num*63360;
    }
    else if( covType=="inch"&&conType=="miles"){
        result=input_num/63360;
    }
    else if( covType=="miles"&&conType=="meters"){
        result=input_num*1609.34;
    }
    else if( covType=="meters"&&conType=="miles"){
        result=input_num/1609.34;
    }
    //centimeters
    else if( covType=="cm"&&conType=="miles"){
        result=input_num/160934.4;
    }
    else if( covType=="miles"&&conType=="cm"){
        result=input_num*160934.4;
    }
    else if( covType=="cm"&&conType=="meters"){
        result=input_num/100
    }
    else if( covType=="meters"&&conType=="cm"){
        result=input_num*100;
    }
    else if( covType=="cm"&&conType=="km"){
        result=input_num/100000;
    }
    else if( covType=="km"&&conType=="cm"){
        result=input_num*100000;
    }
    else if( covType=="cm"&&conType=="inch"){
        result=input_num/2.54;
    }
    else if( covType=="inch"&&conType=="cm"){
        result=input_num*2.54;
    }
    //meters
    else if( covType=="meters"&&conType=="miles"){
        result=input_num*0.000621371;
    }
    else if( covType=="miles"&&conType=="meters"){
        result=input_num*1609.34;
    }
    else if( covType=="meters"&&conType=="cm"){
        result=input_num*100;
    }
    else if( covType=="cm"&&conType=="meters"){
        result=input_num/100;
    }
    console.log(result);
 document.getElementById("output").innerHTML=result;
}
