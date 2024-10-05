const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
}
document.getElementById('currency-form').addEventListener('submit',function(e){
    e.preventDefault();
    let formCurrency = document.getElementById('form').value
    let toCurrency = document.getElementById('to').value
    let amount = document.getElementById('amount').value
    let formAmount = currency[formCurrency]
    let toAmount = currency[toCurrency]
    let baseAmount = amount / formAmount
    let convertedAmount = baseAmount * toAmount
    document.getElementById('result').textContent = ` Converted Amount: ${Math.round(convertedAmount)}`
})