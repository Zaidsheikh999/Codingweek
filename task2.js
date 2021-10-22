const today=new Date()
let dd=today.getDate()
let mm=today.getMonth()+1
let year=today.getFullYear()

dd=dd < 10 ? "0"+dd : dd
mm=mm < 10 ? "0"+mm : mm
document.getElementById("1").innerText=mm+"-"+dd+"-"+year
document.getElementById("2").innerText=mm+"/"+dd+"/"+year
document.getElementById("3").innerText=dd+"-"+mm+"-"+year
document.getElementById("4").innerText=dd+"/"+mm+"/"+year