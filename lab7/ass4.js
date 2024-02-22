
let studentsGradesArray = function (){
   let arr = [];
   let rows = Number(prompt('enter number of students'));
   let columns = Number (prompt('enter number of courses'));

// creating two-dimensional array
for (let i = 0; i < rows; i++) {  
      arr.push([]);
      arr[i].push( new Array(columns));
      for (let j = 0; j < columns; j++) {
      let grade = parseFloat(prompt(`enter the grade for student${i+1} in course ${j+1}`));
      arr[i][j] = grade;
  }
}

// Calculate average grade for each course
    let averageCourseGrades = [];
    for (let j = 0; j < columns; j++) {
        let total = 0;
        for (let i = 0; i < rows; i++) {
            total += arr[i][j];
        }
        averageCourseGrades.push(total / rows);
    }
    // Calculate total grades for each student
    let totalStudentGrades = [];
    for (let i = 0; i < rows; i++) {
        let total = arr[i].reduce((sum, grade) => sum + grade);
        totalStudentGrades.push(total);
    }

    console.log( arr);
    console.log( averageCourseGrades);
    console.log( totalStudentGrades);


}
console.log(studentsGradesArray());