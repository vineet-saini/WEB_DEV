// //


// let userData = [
//     {
//         firstName:"Priyanshu",
//         age:21
//     },
//     {
//         firstName:"Pranav",
//         age: 20
//     },
//     {
//         firstName:"Divesh",
//         age: 22
//     }  
// ]

// Array.prototype.filterReplica = function(callback){
//     let output = [];
//     for(let i = 0; i<this.length; i++){
//         if(callback(this[i])){
//             output.push(this[i]);
//         }
//     }
//     return output;
// }

// let printage = arr.filterReplica(function(value){
//     return value.age > 20;
// });




// console.log(printage());

// let userData = [
//     {
//         firstName:"Priyanshu",
//         age:21
//     },
//     {
//         firstName:"Pranav",
//         age: 20
//     },
//     {
//         firstName:"Divesh",
//         age: 22
//     }  
// ]

// Array.prototype.filterReplica = function(callback){
//     let output = [];
//     for(let i = 0; i < this.length; i++){
//         if(callback(this[i])){
//             output.push(this[i]);
//         }
//     }
//     return output;
// }

// // Use userData instead of arr
// let printage = userData.filterReplica(function(value){
//     return value.age > 20;
// });

// console.log(printage);



// const PriyanshuPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I got placed");
//         // reject("I did not get placed");
//     },3000);
// })
// console.log(PriyanshuPromise);




// PriyanshuPromise
// .then((res)=>{
//     console.log("He getting salary 1CR")
//     console.log(res);
// })
// .then(()=>{
//     console.log("Party");
// })
// .then(() => {
//     console.log("Working");
// })
// .then(()=>{
//     console.log("LAyoff");
// })
// .catch((err)=>{
//     console.log("Error: " , err);
// })



// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Assigned completed by p1");
//         //  reject("Assigned did not completed by p1");
//     },2000)
// })

// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Assigned completed by p2");
//         // reject("Assigned did not completed by p2");
//     },3000)
// })
// const p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Assigned completed by p3");
//         // reject("Assigned did not completed by p3");
//     },4000)
// })
// const p4=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // reject("Assigned did not completed by p4");
//         resolve("Assigned completed by p4");

//     },4000)
// })
// Promise.race([p1,p2,p3,p4]).then((res)=>console.log(res)).catch((err)=>console.log("ERROR",err));
// promise.all when all are resolved
//Output:
// (4) ['Assigned completed by p1', 'Assigned completed by p2', 'Assigned completed by p3', 'Assigned completed by p4']
// "Assigned completed by p1"
// "Assigned completed by p2"
// "Assigned completed by p3"
// "Assigned completed by p4"

//Promise.all did not work when and thrown an error when some are rejected / when some are rejected
//Output:
// ERROR Assigned did not completed by p4

//Promise.all when all are rejected
//Output:
// ERROR Assigned did not completed by p1


//Promise.race when all are rejected
//Output:
// ERROR Assigned did not completed by p1

//Promise.race when some are rejected
//Output:
// Assigned completed by p1

// Promise.race when all are resolved
// Output:
// Assigned completed by p1

// Promise.allsettled = all promises are settled (either resolved or rejected)

// Promise.any = any first which is resolved

// ASYNC await

// https://dummyjson.com/products

async function fetchProducts(){
    try{
        const products = await fetch("https://dummyjson.com/products");
        const data = await products.json();
        console.log(products);
    }
    catch(err){
        console.log("Error fetching products:", err.message);
    }
}

fetchProducts();
