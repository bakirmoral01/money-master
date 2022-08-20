function updateAmountById(inputId) {
    const givenAmount = document.getElementById(inputId);
    const previousGivenAmountString = givenAmount.value;
    const previousGivenAmount = parseFloat(previousGivenAmountString);
    // givenAmount.value = '';
    return previousGivenAmount;
}

function getTextElementByID(elementID) {
    const textElement = document.getElementById(elementID);
    const previousTextElementString = textElement.innerText;
    const previousTextElement = parseFloat(previousTextElementString);
    // textElement.innerText = '';
    return previousTextElement;
}

function setInputElementById(elementID, value) {
    const textElement = document.getElementById(elementID);
    textElement.innerText = value;
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    const income = updateAmountById('income-field');

    const food = updateAmountById('food-field');
    const rent = updateAmountById('rent-field');
    const cloth = updateAmountById('cloth-field');

    const totalCost = food + rent + cloth;
    const totalExpenses = getTextElementByID("total-expenses");
    setInputElementById('total-expenses', totalCost);

    const newBalance = income - totalCost;
    const totalBalance = getTextElementByID('total-balance');
    setInputElementById('total-balance', newBalance);

})

document.getElementById('btn-save').addEventListener('click', function () {
    const income = updateAmountById('income-field');
    const saveAmount = updateAmountById('save-field');
    const balanceAfterExpenses = getTextElementByID('total-balance');


    const savingBalance = income * (saveAmount / 100);
    setInputElementById('saving-amount', savingBalance);

    // console.log(savingAmount)
    const newRemainingBalance = balanceAfterExpenses - savingBalance;
    setInputElementById('remain-balance', newRemainingBalance);
    console.log(newRemainingBalance)


})