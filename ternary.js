const totalMarks = 60;
// if(totalMarks<40){
//     console.log("Fail...");
// }
// else{
//     console.log("Pass...");
// }
// (totalMarks<40) ? console.log("Fail") : console.log("Pass")

const result = totalMarks < 40 ? "FAIL" : totalMarks < 60 ? "B Grade" : totalMarks < 80 ? "A Grade" : "Genius"; 
console.log(result);    