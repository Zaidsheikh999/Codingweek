Date_time()
function Date_time(){

const d= new Date()
let hrs=d.getHours()
let min=d.getMinutes()
let sec=d.getSeconds()
let week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let day=week[d.getDay()]
let am_pm= hrs >= 12? " PM ":" AM "
let result1,result2
hrs=hrs % 12
hrs=hrs ? hrs:12
min=min < 10 ? "0"+min : min
sec=sec < 10 ? "0"+sec : sec
result1 ="Today is : "+day
result2 ="Current time is : "+hrs+am_pm+": "+min+" : "+sec
document.getElementById("1").innerText=result1
document.getElementById("2").innerText=result2
}