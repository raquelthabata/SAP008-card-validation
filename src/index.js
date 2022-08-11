import validator from './validator.js';

console.log(validator);


function typeWriter(e) 
{
    const textoArray = e.innerHTML.split('')
    e.innerHTML = ''
    textoArray.forEach((letra, i) => 
    {setTimeout(() => e.innerHTML += letra, 75 * i)});
}
const palavras = document.querySelector('h1')
typeWriter(palavras) 

const pegarvalor = document.querySelector ("#send");
pegarvalor.addEventListener("click", function(e) {
    e.preventDefault();
    const numerocartao = document.querySelector("#numerocartao");
    const value = numerocartao.value;
    const isValid = validator.isValueNotEmpty(value);

    if(isValid){
        let arrayNumber = value.split('').map(Number);
        arrayNumber.reverse();
        for(let a = 1; a <  arrayNumber.length;a = a + 2)
        {let valueNumberPosition = arrayNumber[a] * 2;
        if ( valueNumberPosition >9) {
                valueNumberPosition = valueNumberPosition - 9 }
                 arrayNumber[a] = valueNumberPosition;}

        var soma= arrayNumber.reduce((soma,arrayNumber)=> soma+arrayNumber, 0);

        let maskNumberForChar = validator.maskify(arrayNumber).toString();
        let semVirgula = maskNumberForChar.replaceAll(",", "");

        if (soma%10==0){
            alert (`O número de cartão ${semVirgula} é válido`)
        
        } else {
            alert (`O número de cartão ${semVirgula} é inválido`)
        }
    }
    else{
        document.querySelector("#numerocartao").focus();
    }
});