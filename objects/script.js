let obj={
    firstName: "Sajeev",
    age:20,
    course:{
        name:"Mern stack",
        duration:"6 months"
    },
    college:"CAS IHRD",
    language:["Malayalam","English"],
}
console.log("object :",obj);
console.log("first name : ",obj.firstName);
console.log("course : ",obj.course);
obj.place="Thiruvillwamala";
console.log("obj : ",obj);
let json_obj=JSON.stringify(obj);
console.log("type of json obj",typeof(json_obj));
console.log("age :",json_obj.age);