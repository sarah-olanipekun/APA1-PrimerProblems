//Celsius to Fahrenheit
const toFahrenheit = tempInCelcius => (tempInCelcius * 9 / 5) + 32;
//Fahrenheit to Celsius
const toCelcius = tempInFahrenheit => (tempInFahrenheit - 32) * 5 / 9;
//Celsius to Kelvin
const celciusToKelvin = tempInCelcius => tempInCelcius + 273.15;
//Kelvin to Celsius
const kelvinToCelcius = tempInKelvin => tempInKelvin - 273.15;
//Kelvin to Fahrenheit
const kelvinToFarenheit = tempInKelvin => toFahrenheit(kelvinToCelcius(tempInKelvin));
//Fahrenheit to Kelvin
const fahrenheitToKelvin = tempInFahrenheit => celciusToKelvin(toCelcius(tempInFahrenheit));


function temperatureConversion(temperature, fromScale, toScale){
    //An array of possible scales
    const scales = ['C', 'K', 'F'];

    if (isNaN(temperature) || temperature === null) {
        throw new Error(`Invalid temperature input`);
    }
    temperature = parseFloat(temperature);

    if (typeof(fromScale) !== 'string' || typeof(toScale) !== 'string') {
        throw new Error(`Invalid conversion type or input scale`);       
    }
    const fromScaleToUpper = fromScale.toUpperCase().trim();
    const toScaleToUpper = toScale.toUpperCase().trim();

    if (scales.indexOf(fromScaleToUpper)===-1 || scales.indexOf(toScaleToUpper)===-1) {
        throw new Error(`Invalid conversion type or input scale`);       
    }    

    //A switch statement to handle the potential scale values
    switch (toScaleToUpper) {
        case fromScaleToUpper:
            return temperature;
        case "C":
            return fromScaleToUpper === 'K' ? kelvinToCelcius(temperature) : toCelcius(temperature);
        case "F":
            return fromScaleToUpper === 'C' ? toFahrenheit(temperature) : kelvinToFarenheit(temperature);
        case "K":
            return fromScaleToUpper === 'F' ? fahrenheitToKelvin(temperature) : celciusToKelvin(temperature);
    }
}

export default temperatureConversion;
