const htmlTemplate = `
    <div class="btnElements">
        <h3>Tool</h3>
        <input type="number" id="timeEle" placeholder="Time">
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
    
    const startEle = this.document.getElementById('btnStart');
    const stopEle = this.document.getElementById('btnStop');
    let timeValue;
    let timeInterval;
    let countdownInterval;
    let countdownTime;
    let timeCountdown;
    
    function startCountdown(timeValue) {
        countdownTime = timeValue * 1000 + 15*1000;
        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    }

    function updateCountdown() {
        let minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);

        document.getElementById("countDown").innerHTML = `${minutes}:${seconds}`;

        countdownTime -= 1000;

        if (countdownTime < 0) {
            clearInterval(countdownInterval);
        }
    }
    
    const checkCaptcha = function(){
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
            return audioFunction(timeValue);
        }
        else if(textEle){
            return textFunction(timeValue);
        }
        else if(checkboxEle){
            return boxFunction(timeValue);
        }
        else if(listenEle && !dviewEle){
            return listenFunction();
        }
        else if(!checkboxEle && pronounceEle && !dviewEle){
            return pronounceFunction(timeValue);
        }
        else if(dviewEle){
            alert("Stop Tool! Hãy tự hoàn thành task và bật lại Tool.");
            clearInterval(countdownInterval);
            stopEle.click();
        }
        else{
            stopEle.click();
        }
    }
    
    function checkInterval() {
        timeInterval = setInterval(checkFunction, timeValue*1000 + 15*1000);
        timeCountdown = setInterval( function() {
            startCountdown(timeValue)
        }, timeValue*1000 + 15*1000);
    }
    
    if(startEle !== null){
        startEle.addEventListener('click', function(e) {
            timeValue = timeEle.value;
            if(timeValue <= 110){
                alert("Time > 110s");
            }
            else{
                alert("Start Tool");
                startEle.style.color = "red";
                stopEle.style.color = "";
                startCountdown(timeValue);
                checkFunction();
                document.getElementById("countDown").style.color = '';
                checkInterval();
            }
            e.preventDefault();
        });
    }
    
    if(stopEle !== null){
        stopEle.addEventListener('click', function(e) {
            alert("Stop Tool!");
            startEle.style.color = "";
            stopEle.style.color = "red";
            clearInterval(timeInterval);
            clearInterval(timeCountdown);
            document.getElementById("countDown").style.color = 'red';
            e.preventDefault();
        });
    }
})

