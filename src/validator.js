const validator = {
  maskify: (arrayNumber) => {

    for(let a = 0; a <  arrayNumber.length - 4; a++){
      arrayNumber[a] = "#";
    }

    return arrayNumber;
  },

  isValueNotEmpty: (valueImput) => {
    if(valueImput === "" || valueImput.length === 0){

      alert("Por favor, preencha o campo informando o numero do cartão!");
      return false;

    }else if(isNaN(valueImput)){

      alert("Somente é valido digitar números!");
      return false;

    }
    else {

      return true;

    }
  }
};

export default validator;