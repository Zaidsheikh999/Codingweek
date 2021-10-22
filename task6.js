first()
function first(){
var b=1
var a="1st January is being a Sunday "
for (var year=2014;year<=2050;year++){
    var d=new Date(year,0,1)
    if(d.getDay()==0){
        document.getElementById(b).innerText=a+year
        console.log(a+year);
        b++
    
    }
    }   
}