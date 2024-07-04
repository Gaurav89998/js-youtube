// #primitive
// 7 types:String,Number,Boolearn,Null,undefined,Symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);

//const bigNumber=34567899876543n

// Reference (Non Primitive)

//Array,Objects,Functions

const heros=["shaktiman","naagraj","doga"];
let myObj={
    name:"hitesh",
    age:22,
}

const myFunction=function(){
    console.log("hello world");
}

console.log(typeof  heros);

//++++++++++++++++++++++

// stack(Primitive),Heap(Non-Primitive)

let myYoutubename="hiteshchoudharydotcom"

let anothername=myYoutubename
anothername="chaiaurcode"

//console.log(myYoutubename);
//console.log(anothername);

let userOne={
    email:"usergoogle.com",
    upi:'user@ybl'
}

let userTwo=userOne

userTwo.email="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

