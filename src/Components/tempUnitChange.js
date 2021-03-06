
export const changeTempUnits = (units, tempKelvin) => {
    let newTemp;

    if(units == 'C') {
        newTemp = tempKelvin - 273.15;
    }
    else {
        newTemp = (tempKelvin - 273.15) * 9/5 + 32;
    }
    return Number(newTemp).toFixed(2);
};

