let count = 0;
let checkTimeoutListen = [];
const listenFunction = function (checkStop) {
    if(checkStop === true) {
        for(let j=0; j<2; j++) {
            clearTimeout(checkTimeoutListen[j]);
        }
    }
    else {
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
                        checkTimeoutListen[0] = setTimeout(clickNextItem, 1*1000);
                    }
                }
            } 
            checkTimeoutListen[1] = setTimeout(clickNextItem, 4*1000);
        } 
        else {
            count = 0;
        }
    }
}