
export const changeTempUnits = (units, tempKelvin) => {
    let newTemp;
<<<<<<< HEAD
=======
    // console.log("button clicked");
>>>>>>> e2052ff9707ce2312fee8f46720fdbcda6e6aba4

    if(units == 'C') {
        newTemp = tempKelvin - 273.15;
    }
    else {
        newTemp = (tempKelvin - 273.15) * 9/5 + 32;
    }
    return Number(newTemp).toFixed(2);
};

