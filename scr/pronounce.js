const pronounceFunction = function(timeValue){
    const buttonDanger = document.querySelector(".btn.btn-info.dnut");
    setTimeout(function() {
        buttonDanger.click();
    }, timeValue*1000);
}