const htmlTemplate = `
    <div class="btnElements">
        <h3>Tool</h3>
        <input type="number" id="timeElement" placeholder="Time">
        <div id="countDown">--:--</div>
        <button type="button" id="btnStart">Start</button>
        <button type="button" id="btnStop">Stop</button>
        <p>Thànhت</p>
    </div>
`;

window.addEventListener('load', function() {
    const wrapperObject = document.querySelector('#mfooter');

    if (wrapperObject !== null) {
        wrapperObject.insertAdjacentHTML('beforeend', htmlTemplate);
    }
    
    let timeValue = 0;
    let countdownTime;
    let countdownInter;
    let timeInterval;
    let timeoutValue;
    let checkStop;

    const startEle = this.document.getElementById('btnStart');
    const stopEle = this.document.getElementById('btnStop');
    const timeEle = this.document.getElementById('timeElement');
    let countdownEle = document.getElementById("countDown");
    
    const startCountdown = function() {
        checkCountdown();
        countdownInter = setInterval(checkCountdown, 1000);
    }

    const checkCountdown = function() {
        countdownEle.innerText = countdownTime;
        countdownTime--;
        if(countdownTime < 1){
            countdownTime = timeValue;
            clearInterval(countdownInter);
        }
    }


    const checkCaptcha = function() {
        const captchaEle = document.querySelector('#txtcaptcha');
        if(captchaEle){
            const iEle = document.querySelector('.fa.fa-close');
            iEle.click();
        }
    }

    const checkNotifi = function() {
        const notifiEle = document.querySelector('.modal.fade.dgmodal.in button');
        if(notifiEle){
            notifiEle.click();
        }
    }

    function checkInterval() {
        timeInterval = setInterval(checkFunction, timeValue*1000 + 15*1000);
        timeoutValue = setInterval(startCountdown, timeValue*1000);
    }

    const checkFunction = function() {
        const pronounceEle = document.querySelector(".btn.btn-info.dnut");
        const audioEle = document.querySelector('i.fa.fa-play-circle.daudio');
        const textEle = document.querySelector('.danw.dinline');
        const checkboxEle = document.querySelector('input.deck');
        const listenEle = document.querySelector('.dtitle');
        const dviewEle = document.querySelector('.dview.sortable');

        checkCaptcha();
        setTimeout(checkNotifi, 2*1000);
        
        if(audioEle && !listenEle && !dviewEle){
            return audioFunction(timeValue, checkStop);
        }
        else if(textEle){
            return textFunction(timeValue, checkStop);
        }
        else if(checkboxEle){
            return boxFunction(timeValue, checkStop);
        }
        else if(listenEle && !dviewEle){
            return listenFunction(checkStop);
        }
        else if(!checkboxEle && pronounceEle && !dviewEle){
            return pronounceFunction(timeValue, checkStop);
        }
        else if(dviewEle){
            clearInterval(timeInterval);
            clearInterval(countdownInter);
            alert("Hãy tự hoàn thành Task và bật lại Tool!");
            countdownEle.innerText = "--:--";
            startEle.style.color = "";
            stopEle.style.color = "red";
        }
        else{
            stopEle.click();
        }
    }
    
    if(startEle !== null){
        startEle.addEventListener('click', function(e) {
            timeValue = timeEle.value;
            countdownTime = timeValue;
            if(timeValue <= 110){
                alert("Time > 110s");
            }
            else{
                alert("Start Tool");
                checkStop = false;
                startCountdown();
                checkFunction();
                checkInterval();
                startEle.style.color = "red";
                stopEle.style.color = "";
            }
            e.preventDefault();
        });
    }
    
    if(stopEle !== null){
        stopEle.addEventListener('click', function(e) {
            checkStop = true;
            checkFunction();
            clearInterval(timeInterval);
            clearInterval(timeoutValue);
            clearInterval(countdownInter);
            alert("Stop Tool!");
            startEle.style.color = "";
            stopEle.style.color = "red";
            countdownEle.innerText = "--:--";
            e.preventDefault();
        });
    }
})

