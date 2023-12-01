const {students} =  require('../db/database');

const add = (newStudent) => {
  newStudent.id = students.length+1;
  students.push(newStudent);

  console.log('\nnew student added\n');
  console.log('\nstudent after adding\n');
  console.log(students);
}

const display = () => {
    console.log('\ndisplay all students in our databse\n');
    console.log(students);
} 

const update = (id,key,value) => {
  var exists = students.find(Element=>Element.id === id);
  console.log(exists);
  if(!exists){
    console.log('\nNo such student found\n');
  }else{
    exists[key] = value;
    if(key === "firstname" || key === "lastname" || key === "age" ||  key === "email"){
        }
        console.log('\nstudent updated\n');
        console.log(exists);
    
  }
}

//update many

const updateMany = (id,obj) => {
 var exists = students.find(Element=>Element.id === id);
 console.log(exists);
 if(!exists){
    console.log('\nNo such students\n');
 }else{
    for (const key in obj) {
        exists[key] = obj[key];
        
            console.log('\n update many item');
           console.log(exists); 
            
        
    }
 }
}


module.exports = {
    add,
    display,
    update,
    updateMany,
}

