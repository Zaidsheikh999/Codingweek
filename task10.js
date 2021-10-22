function celsius_to_fahrenheit(){
    let a=document.getElementById("1").value
    let r=((a*9)/5)+32
    document.getElementById("3").innerText=r+" °F"
}

function fahrenheit_to_celsius(){
    let a=document.getElementById("1").value
    let r=(a-32)*(5/9)
    document.getElementById("3").innerText=r+" °C"
}