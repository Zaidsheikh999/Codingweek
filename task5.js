function leapyear(){
let a=Number(document.getElementById("1").value)
let b="Is a Leap Year"
let c="Not a Leap Year"
if(a%4==0){
       if(a%100==0){
           if(a%400==0){
               document.getElementById("2").innerHTML=b
           }
           else{
            document.getElementById("2").innerHTML=c
           }
       }
       else{
        document.getElementById("2").innerHTML=b
       }
   }
else{
    document.getElementById("2").innerHTML=c
   }

}
