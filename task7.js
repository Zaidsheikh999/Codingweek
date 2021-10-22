
function check(){

var a=Math.floor(Math.random()*10)+1
var b=document.getElementById("1").value
console.log(a)
if(a==b){
    document.getElementById("2").innerText="Good Work"
}
else{
    document.getElementById("2").innerText="Not Match"
}
}