// function welcomeStudents(welcomeMessage,goodByeMsg){
//     // console.log(${welcomeMessage}+" "+this.studentName+" is a student of class "+this.studentClass+" "+goodByeMsg);
//     return `${welcomeMessage}" "${this.studentName}" is a student of class "${this.studentClass}" "${goodByeMsg}`
// }
// const student1={
//     studentName:"Devesh",
//     studentClass:"G4"
// }
// const student2={
//     studentName:"Devansh",
//     studentClass:"G4"
// }

// // call
// welcomeStudents.call(student1,"Good Morning","Bye");
// welcomeStudents.call(student1,"Good good","Bye bye ");

// // apply  -> ke ander array me pass hote ha
// welcomeStudents.call(student1,["Good Morning","Bye"]);
// welcomeStudents.call(student1,["Good good","Bye bye "]);


// //bind
// const s1 = welcomeStudents.bind(student1,"Good Morning","Bye");

// console.log(s1());



// Currying
// That we are not 

// function sumOfThree(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         }
//     }
// }

// console.log(sumOfThree(20)(30)(40)); 


//Event capturing and bubbling

const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener("click",()=>{
    console.log("Grand Parent Clicked");
});

parent.addEventListener("click",()=>{
    console.log("Parent Clicked");
});

child.addEventListener("click",()=>{
    console.log("Child Clicked");
});