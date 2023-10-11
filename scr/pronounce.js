let checkTimeoutProno;
const pronounceFunction = function(timeValue, checkStop){
    const buttonDanger = document.querySelector(".btn.btn-info.dnut");
    
    if(checkStop === true) {
        clearTimeout(checkTimeoutProno);
    }
    else {
        checkTimeoutProno = setTimeout(() => {
            buttonDanger.click();
        }, timeValue*1000);
    }
}