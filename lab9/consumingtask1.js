   let person1 =new person("EMAN abdelshafi","female");
   console.log(person1);
   person1.picture = "new-image.png";
   console.log(person1);
 
   let employee1 = new employee("eman abdelshafi", "female", 50000, "Arabic");
   let employee2 = new employee("kamal abdelshafi", "male", 90000, "Arabic");
   let employee3 = new employee("mahmoud ahmed", "male", 70000, "Arabic","images.png");

   console.log(employee1.toString());
   console.log(employee1);
   
   ////////////////////
  console.log(employee1.count);
  console.log(person1.count);
  createEmplyeesCard(employee1);
  createEmplyeesCard(employee2);
  createEmplyeesCard(employee3);