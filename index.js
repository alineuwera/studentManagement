const {add,display,update,updateMany} = require("./controller/student-controller");

const newStudent1 = {

    firstName: 'rosine',
    LastName: 'rusine',
    age: 30,
    email: 'rosine11@gmail.com'
 };
 display();
 add(newStudent1);
//after update display
 update(1,"age",18);

 //update many data

 const tobeupd={
    
    age:13,
    firstName:'gaga',

};
updateMany(2,tobeupd);
 
