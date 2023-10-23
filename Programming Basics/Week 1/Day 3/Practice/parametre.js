//------lvl 1------
var person='anis';
function greet(person){
    console.log('good day'+' '+ person);
}
greet(person);
//------ lvl2 ------
var date="17/05/2024";
var hours="17";
var min="05";
var time=hours+":"+min;
function greet2(person,time){
    if(hours<=11){
        console.log('Good morning, '+person+' the time of the day  is '+time);
}else if(hourse>11){
        console.log('Good evening, '+person+' the time of the day  is '+time);
}
}
greet2(person,time);

function greet3(person){
    if(person=="Count Douku"){
        console.log("I'm coming for you, Dooku!" );
    }
    else{
        console.log('good day '+person);
    }
}
greet3(person);