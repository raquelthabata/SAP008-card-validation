import validator from './validator.js';

console.log(validator);


function typeWriter(e) {
    const textoArray = e.innerHTML.split('')
    e.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => e.innerHTML += letra, 75 * i)
    });
}
const palavras = document.querySelector('p')
typeWriter(palavras)

const pegarvalor = document.querySelector ("#send");
pegarvalor.addEventListener("click", function(e) {
    e.preventDefault();
    const numerocartao = document.querySelector("#numerocartao");
    const value = numerocartao.value;
    console.log(value);
});