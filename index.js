
const CURRENCY ={
    USD_TO_UAN: 37.65,
    EUR_TO_UAN: 40.61
}

const converterForm = document.querySelector('#currency-converter-form')

converterForm.addEventListener('submit',convertHandler);

function convertHandler(event){
    event.preventDefault();

    const amount = Number(document.querySelector('#amount').value);

    const currency = document.querySelector('#currency').value;
    
    let convertedAmount;

    if(currency===USD){
        convertedAmount = amount*currency.USD_TO_UAN;
    }else if(currency===EUR){
        convertedAmount = amount*currency.EUR_TO_UAN;
    }else{
        throw new Error('Something problem...!')
    }

    const resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = `${amount} ${currency} = ${convertedAmount.toFixed(2)} UAH`

}