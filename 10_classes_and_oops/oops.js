const user={
    username:"hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        //console.log("Got user details from database");
        console.log(`Username:${this.username}`);
    }
}

function User(username, loginCount, isLoggedIn){
    this.username=username
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn

    return this
}

const userOne=new User("hitesh",12,true)
const userTwo=new User("ChaiAurCode",11,false)//instance of MDN

console.log(userOne.constructor);
console.log(userTwo)

//console.log(userOne);