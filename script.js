let $elform = document.querySelector("#form");
let button = document.querySelector(".button")
let input = document.querySelector("#onFoot")
let p = 3.6,
v =20.1,  
m = 70,
s=800,
ul = document.querySelector(".left-box")


function time(a ){
  return  ((input.value/a ).toFixed(2));
  
  
}
elpiyoda = document.querySelector(".onFoot");
elvelosiped = document.querySelector(".bicycle");
elmashina = document.querySelector(".car");
elsamolyot = document.querySelector(".plane");

button.addEventListener("click" , function(e){
  e.preventDefault()
  
  if(input.value == 0 || input.value <0){
    alert("Iltimos,qaytadan kiriting!")
  }
  else{
    elpiyoda.innerHTML=`Time: ${time(p)}`
    elvelosiped.innerHTML=`Velosiped: ${time(v)}`
    elmashina.innerHTML=`Mashina: ${time(m)}`
    elsamolyot.innerHTML=`Samolyot: ${time(s)}`
   
  }
  input.value = null;

})


