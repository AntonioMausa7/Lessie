var cpy = document.querySelector('span#cpy')
var data = new Date
var ano = data.getFullYear()
cpy.innerHTML = `&copy ${ano} AntonioMausa7. Todos os direitos reservados.`
var nm = document.querySelector('input#nm');
var w=0;

nm.addEventListener('keydown',(e)=>{
    if(e.key == "Enter"){
        window.location.href = 'home/index.html'
        var nmreal = nm.value;
        localStorage.setItem('Nome',nmreal);
    
    }})

var nomest = localStorage.getItem('Nome')

if(nomest.length > 0){window.location.href = 'home/index.html'}

