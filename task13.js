
function max_of_three() 
 {let x=document.getElementById("1").value
  let y=document.getElementById("2").value
  let z=document.getElementById("3").value 
  let max
  if (x > y)
  {
    max = x
  } else
  {
    max = y;
  }
  if (z > max) 
  {
    max = z
  }
  document.getElementById("4").innerText="The Max Number Of Three is: "+max
}
