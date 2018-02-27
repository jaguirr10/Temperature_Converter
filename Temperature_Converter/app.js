// Juan Aguirre


const celsiusInput =  document.querySelector('#Celsius > input');
const fahrenheitInput = document.querySelector('#Fahrenheit  > input');
const kelvinInput = document.querySelector('#Kelvin > input'); 

//  this function converts Celsius to fahrenheit and Kelvin 

function CFK(){
    const cTemp =  parseFloat(celsiusInput.value);
    const fTemp = (cTemp * 9/5) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
}

     
//  this function converts fahrenheit to Celsius and Kelvin 

function FC(){
    const fTemp =  parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * 5/9;
    celsiusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
}

//  this function converts Kelvin to Celsius and fahrenheit

function KC(){
    const kTemp =  parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp =  9/5 * (kTemp - 273.15) + 32;
    celsiusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);
}


 //  this function Rounds the number to the nearest Hundredth 

 function roundNum(num)
 {
       return Math.round(num*100)/100;
 }


 function main () 
 {
    celsiusInput.addEventListener('input', CFK);
    fahrenheitInput.addEventListener('input', FC);
    kelvinInput.addEventListener('input', KC);
 }

 main();