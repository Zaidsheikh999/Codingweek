let a="saylani"
let b=a.length

animation()
function animation(){
    setInterval(function(){
        a=a.slice(b-1)+a.slice(0,b-1)
        document.getElementById("1").innerHTML=a
    },500)

}
