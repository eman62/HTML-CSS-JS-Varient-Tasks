class person{
     static #count = 0;
     #fullName
     #picture

     constructor(fullName="",gender,picture="man.png"){
       person.#count++;
       this.fullName= fullName;
       this.gender=gender;
       this.picture=picture;  
     }  
     //set image
     set picture (picture){
       if (this.gender == "female"){
           this.#picture="woman.png";
       }
       else{
            this.#picture=picture;
       }

     }
     //get image
      get picture (){
        return this.#picture;
      }
      //set fullname
      set fullName(fullName){
        ////if condition to make sure that full name contain two words
          let pascalname= fullName.split(" ");
          if(pascalname.length ==2){
               for (let i= 0 ;i<pascalname.length;i++){
                    pascalname[i] = pascalname[i][0].toUpperCase() + pascalname[i].substr(1).toLowerCase(); 
             }

               let pascalFullName= pascalname.join(" ");
              this.#fullName=pascalFullName;
            }
            else{
             throw new Error("you must enter fullname")
             // alert("you must enter fullname");

            }
          }

       //get Fullname     
      get fullNamePascal(){
             return this.#fullName;
            }

       //get count value
       get count (){
        return person.#count;
       }     

   }
//second class
class employee extends person{

  constructor(fullName = "", gender, salary = 0, language = "", picture = "man.png") {
    super(fullName, gender, picture);
    this.salary = salary;
    this.language = language;
  }

  toString(){
     return `name is ${this.fullNamePascal} and salary is ${this.salary} `
  }

}
//create new element
let appendNewElement =function(elementObject,value,parent,style){
//  elementObject = document.createElement(element);
  elementObject.innerText= value;
  parent.appendChild(elementObject);
  elementObject.classList.add(style);
  return elementObject;
}


   //////////////////////////////////////////////////
  let createEmplyeesCard = function(employee){
  let Div = document.createElement("div");
  document.body.appendChild( Div);
  Div.classList.add("div");

  let EmployeeImage = document.createElement("img");
  EmployeeImage.src =`${employee.picture}`
   Div.appendChild(EmployeeImage);
  EmployeeImage.classList.add("img");
  let EmployeeName = document.createElement("p");
  appendNewElement(EmployeeName,`${employee.fullNamePascal}`, Div,"paragraph1")
 

  let emplyeegender = document.createElement("span");
  appendNewElement(emplyeegender,`${employee.gender}`, Div,"span")
  
  let emplyeelanguage = document.createElement("span");
  appendNewElement(emplyeelanguage,`${employee.language}`, Div,"span")

 
  let emplyeeSalary = document.createElement("span");
  appendNewElement(emplyeeSalary,`${employee.salary}`, Div,"span")

  

  }

  
  
