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

// const grandParent = document.getElementById("grandParent");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// grandParent.addEventListener("click",()=>{
//     console.log("Grand Parent Clicked");
// });

// parent.addEventListener("click",()=>{
//     console.log("Parent Clicked");
// });

// child.addEventListener("click",()=>{
//     console.log("Child Clicked");
// });


const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved P1");
    },3000);
})

promise1.then((res)=>console.log(res))
.then((res)=>setTimeout(()=>{
    console.log("P2");
},2000))
.catch((err)=>console.log(err))
.then((res)=>setTimeout(()=>{
    console.log("P3");
},5000))
.then((res)=>setTimeout(()=>{
    console.log("P4");
},1000))
.catch((err)=>console.log(err));



// function somethingSomething(message, delay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             // console.log()
//             resolve("Promise resolved", message);
//         },delay)
//     })
// }
function somethingSomething(message, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // console.log()
            reject("Promise resolved", message);
        },delay)
    })
}

promise1.then((res)=>console.log(res))
.then(()=>{
    return somethingSomething("P2", 2000);
}).then(()=>{
    somethingSomething("P3", 3000)
}).catch((err)=>console.log(err))
.then(()=>{
    return somethingSomething("P4", 5000);
})

