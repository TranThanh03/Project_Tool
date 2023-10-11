const checkTimeoutBox = [];
const boxFunction = function(timeValue, checkStop){    
    const buttonInfo = document.querySelector(".btn.btn-info.dnut");
    const buttonDanger = document.querySelector(".btn.btn-danger.dnut");
    const valuesArray = [];
    const deckInputs = document.querySelectorAll('input.deck');
    const deckInss = document.querySelectorAll('.iCheck-helper');
    
    if(checkStop === true) {
        for(let i=0; i<7; i++) {
            clearTimeout(checkTimeoutBox[i]);
        }
    }
    else {
        checkTimeoutBox[0] = setTimeout(() => {
            deckInputs.forEach(function(deckInput, index) {
                let valueInput = deckInput.value;
                if(valueInput.endsWith('0')) {
                    deckInss[index].click();
                }
            });
        }, 10*1000);
        
        checkTimeoutBox[1] = setTimeout(() => {
            buttonInfo.click();
        }, 30*1000);
        
        checkTimeoutBox[2] = setTimeout(() => {
            buttonDanger.click();
            
        }, 35*1000);

        checkTimeoutBox[3] = setTimeout(() => {
            const divElements = document.querySelectorAll('.iradio_square-green.checked');
            divElements.forEach(function(divElement) {
                const inputElement = divElement.querySelector('input.deck');
                const inputValue = inputElement.value;
                valuesArray.push(inputValue);
            });
        }, 40*1000);
            
        checkTimeoutBox[4] = setTimeout(() => {
            let buttonPrimary = document.querySelector(".btn.dnut.btn-primary");
            buttonPrimary.click();
        }, 60*1000);
        
        checkTimeoutBox[5] = setTimeout(() => {
            deckInputs.forEach(function(deckInput, index) {
            if (valuesArray.includes(deckInput.value)) {
                deckInss[index].click();
            }
            });
        }, 65*1000);
        
        checkTimeoutBox[6] = setTimeout(() => {
            buttonInfo.click();
        }, timeValue*1000);
    }
}