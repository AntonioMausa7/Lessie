var Nomest = localStorage.getItem('Nome')
var loc = 0;


function Sair(){
    localStorage.clear()
}

if(Nomest == null){
    window.location.replace("../index.html")
}

var imgt = document.getElementById('n1')
var img = []

for (var c=1;c<=18;c++){
    img[c] = document.getElementById(`n${c}`)
}


var btd = document.querySelector('input#fd')
var bte = document.querySelector('input#bk')

btd.addEventListener('click',()=>{
    if(loc==0){
        for(var c =1;c<=6;c++){
            img[c].setAttribute('src',`gimagens/lessie${c+6}.jpg`)
            bte.setAttribute('style','')

        }
        loc = 1
    }else if(loc==1){
        for(var c =1;c<=6;c++){
            img[c].setAttribute('src',`gimagens/lessie${c+12}.jpg`)
            btd.setAttribute('style',"background-color: rgb(208,208,208);")
            
        }
        loc = 2
    }else if(loc==2){
        
    }

})
bte.setAttribute('style','background-color: rgb(208,208,208);')

bte.addEventListener('click',()=>{
    if(loc==2){
        for(var c =1;c<=6;c++){
            img[c].setAttribute('src',`gimagens/lessie${c+6}.jpg`)
            btd.setAttribute('style',"")

        }
        loc = 1
    }else if(loc==1){
        for(var c =1;c<=6;c++){
            img[c].setAttribute('src',`gimagens/lessie${c}.jpg`)
            bte.setAttribute('style',"background-color: rgb(208,208,208);")
        }
        loc = 0
    }else if(loc==0){
        
    } 

})

function abrir(n){
    var imgab = img[n].getAttribute("src")
    open(`${imgab}`,'_self','popup');
}

