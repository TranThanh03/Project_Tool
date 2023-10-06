let count = 0;
let valueTimeout;
const listenFunction = function () {
    let i = 0;
    let qDtitle = document.querySelector(`#qid${count}`);
    if (qDtitle) {
        let aDtitle = document.querySelectorAll(`#qid${count} a`);
        let aDan = document.querySelectorAll(`#qid${count} div`);

        function clickNextItem() {
            if (i < 4) {
                aDtitle[i].click();
                if (aDan[i].style.border === '') {
                    ++count;
                    listenFunction();
                } else {
                    i++;
                    valueTimeout = setTimeout(clickNextItem, 1*1000);
                }
            }
        } 
        setTimeout(clickNextItem, 3*1000);
    } 
    else {
        count = 0;
        clearInterval(valueTimeout);
    }
}