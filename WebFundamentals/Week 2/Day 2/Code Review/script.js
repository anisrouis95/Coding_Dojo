var req = document.querySelector('#req');
var connex = document.querySelector('#connex');

function removebtn(id){
    var element=document.querySelector(id);
    element.remove();
    req.innerText--;
}
function changename(id){
    var element=document.querySelector('#change'); 
    element.innerHTML="Anis Rouis"

}
function accept(id){
    removebtn(id);
    connex.innerText++;
}