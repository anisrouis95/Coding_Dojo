function odd(){
    for(var i =1 ; i<=20 ; i++){
        if(i%2==1){
            console.log(i);
        }
    }
}
odd();

function decmult3(){
    for(var i=100;i>=0;i--){
        if(i%3==0){
            console.log(i);
        }
    }
}
decmult3();

function decbyhalf(){
    for(var i=4;i>=-3.5;i-=1.5){
        console.log(i);
    }
}
decbyhalf();


function sigma() {
    let res=0;
    for(let i=1;i<=100;i++){
        res+=i;
    }
    console.log(res);
}
sigma();



function factorial(){
    let res=1;
    for(let i =1;i<=12;i++){
        res*=i;
    }
    console.log(res);

}
factorial();