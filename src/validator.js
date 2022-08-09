const validator = {
  maskify: (arrayNumber) => {

    for(let a = 0; a <  arrayNumber.length - 4; a++){
      arrayNumber[a] = "#";
    }

    return arrayNumber;
  }
};

export default validator;