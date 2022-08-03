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
    const value = numerocartao.value; //"12345"
    let arrayNumber = value.split('').map(Number); //[1,2,3,4,5]
    arrayNumber.reverse(); //[5,4,3,2,1]

    for(let a = 1; a <  arrayNumber.length;){ //começa com a na posição 1; a tem que ser menor que o tamanho do array (condição); 
        let valueNumberPosition = arrayNumber[a] * 2; //Criei uma variavel Multiplicar por 2 o valor da posição do array arrayNumber
        arrayNumber[a] = valueNumberPosition; //substitui o valor da posiçao pelo resultado da valueNumberPosition
        a = a + 2; //incrementação
    }

    console.log(arrayNumber);

    //TODO: Entrar novamente no array e verificar todos os valores maiores que 9.
    //for (para entrar na posição) if(identificar os valores maiores que 9)
    

});