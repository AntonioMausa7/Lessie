var Nomest = localStorage.getItem('Nome')


function Sair(){
    localStorage.clear()
}

if(Nomest == null){
    window.location.replace("../index.html")
}
