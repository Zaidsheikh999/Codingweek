function doo(){
    let x=Number(document.getElementById("1").value)
    let y=Number(document.getElementById("2").value)
    document.getElementById("3").innerHTML=sum(x, y)
    }
function sum (x, y) {
      
      if (x == y) {
        return 3 * (x + y)+"<br>Triple of thier Sum";
        } 
       else
       {
        return (x + y)+"<br>Sum of two";
       }
     }
    