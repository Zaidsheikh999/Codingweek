function Area(){

let a=Number(document.getElementById("1").value)
let b=Number(document.getElementById("2").value)
let c=Number(document.getElementById("3").value)
let s=(a+b+c)/2
let area=Math.sqrt(s*((s-a)*(s-b)*(s-c)))
document.getElementById("4").innerText="Area is : "+area
}