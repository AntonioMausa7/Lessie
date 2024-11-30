var bvi = document.querySelector('p#bvi')
var Nomest = localStorage.getItem('Nome')
bvi.innerText = `Olá ${Nomest}, esse site é sobre a cachorrinha Lessie, do Brasil.`;

function Sair(){
    localStorage.clear()
}

if(Nomest == null){
    window.location.replace("../index.html")
}