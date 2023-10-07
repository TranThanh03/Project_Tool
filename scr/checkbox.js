const boxFunction = function(timeValue){    
    const buttonInfo = document.querySelector(".btn.btn-info.dnut");
    const buttonDanger = document.querySelector(".btn.btn-danger.dnut");
    const valuesArray = [];
    const deckInputs = document.querySelectorAll('input.deck');
    const deckInss = document.querySelectorAll('.iCheck-helper');
    
    setTimeout(function() {
        deckInputs.forEach(function(deckInput, index) {
            let valueInput = deckInput.value;
            if (valueInput.endsWith('0')) {
                deckInss[index].click();
            }
        });
    }, 5*1000);
    setTimeout(function() {
        buttonInfo.click();
    }, 30*1000);
    setTimeout(function() {
        buttonDanger.click();
        setTimeout(function() {
        const divElements = document.querySelectorAll('.iradio_square-green.checked');
        divElements.forEach(function(divElement) {
                const inputElement = divElement.querySelector('input.deck');
                const inputValue = inputElement.value;
                valuesArray.push(inputValue);
            });
        }, 3*1000);
    }, 33*1000);
    setTimeout(function() {
        let buttonPrimary = document.querySelector(".btn.dnut.btn-primary");
        buttonPrimary.click();
    }, 55*1000);
    setTimeout(function() {
        deckInputs.forEach(function(deckInput, index) {
        if (valuesArray.includes(deckInput.value)) {
            deckInss[index].click();
        }
        });
    }, 60*1000);
    setTimeout(function() {
        buttonInfo.click();
    }, timeValue*1000);
}