//code to change the temp from kelvin to F and c

export const changeTempUnits = (units, tempKelvin) => {
    let newTemp;

    if(units == 'celsius') {
        newTemp = tempKelvin - 273.15;
    }
    else {
        newTemp = (tempKelvin - 273.15) * 9/5 + 32;
    }
    return newTemp;
};