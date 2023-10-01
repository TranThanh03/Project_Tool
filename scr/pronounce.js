buttonFunction = function(){
    const buttonDanger = document.querySelector(".btn.btn-info.dnut");
    variableTimeout = setTimeout(function() {
        buttonDanger.click();
    }, 90*1000);
}