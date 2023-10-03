pronounceFunction = function(timeValue, variableTimeout){
    const buttonDanger = document.querySelector(".btn.btn-info.dnut");
    variableTimeout = setTimeout(function() {
        buttonDanger.click();
    }, timeValue*1000);
}