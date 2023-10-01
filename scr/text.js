textFunction = function() {
    const buttonInfo = document.querySelector(".btn.btn-info.dnut");
    const buttonDanger = document.querySelector(".btn.btn-danger.dnut");
    const inputElements = document.querySelectorAll('.danw.dinline');
    const listText = [];
    
    for (let i = 0; i < inputElements.length; i++) {
        inputElements[i].value = "a";
    }
    setTimeout(function() {
        buttonInfo.click();
    }, 30*1000);
    setTimeout(function() {
        buttonDanger.click();
    }, 35*1000);
    setTimeout(function() {
        let buttonPrimary = document.querySelector(".btn.dnut.btn-primary");
        buttonPrimary.click();
    }, 40*1000);
    setTimeout(function() {
        for (let i = 0; i < inputElements.length; i++) {
            inputElements[i].value = listText[i];
    }
    }, 45*1000);
    variableTimeout = setTimeout(function() {
        buttonInfo.click();
    }, 60*1000);
}