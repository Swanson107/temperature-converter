const inputType = document.getElementById('input-select');
const outputType = document.getElementById('output-select');
const tempInput = document.getElementById('temp-input');

function toCelcius(temp, type){
    if (type === 'fahrenheit') {
        return ((temp - 32) * (5/9)).toFixed(2);
    } else if (type === 'kelvin') {
        return (temp - 273.15).toFixed(2);
    } else if (type === 'celcius') {
        return temp;
    }
}

function toKelvin(temp, type){
    if (type === 'fahrenheit') {
        return ((temp - 32) * 5/9 + 273.15).toFixed(2);
    } else if (type === 'celcius') {
        return ((temp - 273.15)).toFixed(2);
    } else if (type === 'kelvin') {
        return temp;
    }
}




document.querySelector('.submit').addEventListener('click', function() {
    const 
    inputTemp = document.getElementById('temp-input').value;
    console.log("Input temp: " + inputTemp);
    if (inputType.value === 'fahrenheit') {
        if (outputType.value === 'celcius'){
            let newTemp = toCelcius(inputTemp, 'fahrenheit');
            console.log(newTemp);
        } else if (outputType.value === 'kelvin') {
            let newTemp = toKelvin(inputTemp, 'fahrenheit');
            console.log(newTemp);
        }
    } else if (inputType.value === 'celcius') {
        if ( outputType.value === 'kelvin') {
            let newTemp = toKelvin(inputTemp, 'celcius');
            console.log(newTemp);
        }
    }
})

