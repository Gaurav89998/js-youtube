//var c=300
let a=300
if(true){
    let a=10
    const b=20
    //console.log("INNER:",a)

}



//console.log(a);
//console.log(b);
//console.log(c);


function one(){
const username="hitesh"

function two(){
    const website="youtube"
    console.log(username);
}
//console.log(website);

two() //two is not called it will not be executed

}

//one()

if(true){
    const username="hitesh"
    if(username==="hitesh"){
         const website=" youtube"
         //console.log(username+website);
    }
    //console.log(website);
}

//console.log(username);


//+++++++++++++interesting++++++++++++++


console.log(addone(5))

function addone(num){
    return num+1
}


addtwo(5)//can't be called or executed
const addtwo=function(num){
    return num+2
}


