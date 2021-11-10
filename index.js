

var card1 = document.getElementById("schoolCard1")
card1.onclick = changeBlueColor

console.log(sessionStorage.getItem('ifRed'))
if(sessionStorage.getItem('ifRed')){
    document.getElementById("symbol2").style.backgroundColor = "red";
}


function changeBlueColor(){
    console.log("test")
    document.getElementById("symbol1").style.backgroundColor = "blue";
}

function setColor(){
   sessionStorage.setItem('ifRed', true)
    console.log(sessionStorage.getItem('ifRed'))
}
function goBack(){
    window.location.href = "index.html"
    console.log(sessionStorage.getItem('ifRed'))
}



