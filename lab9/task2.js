window.addEventListener("load",function(){

let studentsTable = this.document.getElementsByTagName("table")[0];
let studentDepartment =document.getElementsByTagName('tr')[0].children[0].getElementsByTagName("input");
let studentName =this.document.getElementsByTagName("input")[3];
let studentGrade =this.document.getElementsByTagName("input")[4];
let addButton = document.getElementsByTagName("input")[5];
let filterOptions = this.document.getElementsByTagName("option");

let namesArray=[];

// let sucessFilter = function(grade,tableRows){
//   let sucesssCondition = function(){
//     return grade>=50;
//   }
//   filterOptions[1].onclick =function(event){
//    letFilteredRow= tableRows.filter(sucesssCondition);
//   }
  

// }
///////addclass function
let departmentArray= ["SD","OS","EL"];
let AddClass = function(departValue,row){
  row.classList.add(departValue);
}
//////////createNew element function
let createNEWElement =function(element){
 return document.createElement(element)
} 

addButton.onclick =function(event){
  let newStudentRow = createNEWElement("tr");
    if(studentDepartment[0].checked ){
       AddClass("SD",newStudentRow);
    }
    else if(studentDepartment[1].checked){
       AddClass("OS",newStudentRow);
    }
    else{
       AddClass("EL",newStudentRow);
    }

    let appendTDvalue =function(rowTd,value){
      rowTd.innerText=value;
      newStudentRow.appendChild(rowTd);
    }
  
  let nameTd = createNEWElement("td");
  let valueOfStudentName= studentName.value;
  
  
  if(namesArray.includes(valueOfStudentName)){
    alert("student name must be unique")
  }
  else{
  namesArray.push(valueOfStudentName);
  appendTDvalue(nameTd,valueOfStudentName);
  
  let gradeTd =createNEWElement("td");
  appendTDvalue(gradeTd,studentGrade.value);
  studentsTable.appendChild(newStudentRow);
  
  }
  
  studentName.value = "";
  studentGrade.value = "";

}




})