function test() {
    let x=Number(document.getElementById("1").value)
    document.getElementById("2").innerHTML=((Math.abs(100 - x) <= 20) ||(Math.abs(400 - x) <= 20))
  }