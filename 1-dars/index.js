"use strict";

// 1-masala ///////////////////////////////////////////////////////////////////////////// 

// const one  = new Promise((res)=>{
//     setTimeout(()=>{
//         res(`xarakat qilaman`)
//     }, 2000)
// });

// const two  = new Promise((res)=>{
//     setTimeout(()=>{
//         res(`bajaraman`)
//     }, 500)
// });

// const three  = new Promise((res)=>{
//     setTimeout(()=>{
//         res(`o'ylab ko'raman`)
//     }, 5000)
// });

// Promise.race([one, two, three])
// .then(winner=>console.log(winner))

// 2-masala ///////////////////////////////////////////////////////////////////////////// 

// class Animal{
//     constructor(name, species){
//         this.name=name
//         this.species=species
//     }
// }

// class Pet extends Animal{
//     constructor(name, species, breed){
//         super(name, species)
//         this.breed=breed
//     }

//     callPet(){
//         return `- ${this.name} nomli ${this.species} keldi`
//     }
// }

// const it = new Pet("Bo'ribosar", "kuchuk", "chihuahua")
// const sigir = new Pet("Sinyorita", "mol", "simmental")
// const mosh = new Pet("Najim", "mushuk", "svinks")

// console.log(it.callPet());
// console.log(sigir.callPet());
// console.log(mosh.callPet());

// // 3-masala /////////////////////////////////////////////////////////////////////////////

// class MathCustom{
//     static add=(...numbers) => numbers.reduce((b, e)=>b+e, 0) 

//     static divide(a, b){
//         return a/b
//     }

//     static max(...numbers){
//         let result=0
//         numbers.forEach(v=>v>result?result=v:0)
//         return result
//     }
// }

// console.log(MathCustom.add(4,5,6));
// console.log(MathCustom.divide(7,8));
// console.log(MathCustom.max(5,3,8));

// // 4-masala ///////////////////////////////////////////////////////////////////////////// 

// class Student{
//     #id
//     constructor(fullname, age, id){
//         this.fullname=fullname
//         this.age=age
//         this.#id=id
//     }

//     getID(){
//         return this.#id
//     }

//     setID(newID){
//         this.#id=newID
//     }
// }

// const ali=new Student("Ali Valiyev", 13, 4511462)

// ali.setID(9875625)
// console.log(ali.getID())
// console.log(ali);