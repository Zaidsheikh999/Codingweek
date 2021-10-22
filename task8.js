const today=new Date()
var aug14=new Date(today.getFullYear(),7,14)

if(today.getMonth()>=7 && today.getDate()>14)
{
    aug14.setFullYear(aug14.getFullYear()+1)
}

var one_day=1000*60*60*24
var result=Math.ceil((aug14.getTime()-today.getTime())/(one_day))
console.log(result)
document.getElementById("1").innerText=result+" days left until next 14 August!"
