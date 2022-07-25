import validator from './validator.js';

console.log(validator);

const botao= document.getElementById("validador")
botao.addEventListener("click",function(event){
    console.log(event)
})

function typeWriter(e) {
    const textoArray = e.innerHTML.split('')
    e.innerHTML = ''
    textoArray.forEach ((letra,i) => { setTimeout (() => e.innerHTML += letra, 75 * i )});

}

const texto = document.querySelector ('p')
typeWriter (texto)