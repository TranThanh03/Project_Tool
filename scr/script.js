const htmlTemplate = `
    <div class="btnElements">
        <h3>Tool</h3>
        <input type="number" id="timeElement" placeholder="Time">
        <div id="countDown">--:--</div>
        <button type="button" id="btnStart">Start</button>
        <button type="button" id="btnStop">Stop</button>
    </div>
`;


window.addEventListener('load', function() {
    const wrapperObject = document.querySelector('body > div'); //#mfooter

    if (wrapperObject !== null) {
        wrapperObject.insertAdjacentHTML('beforeend', htmlTemplate);
    }
    
    const startEle = this.document.getElementById('btnStart');
    const stopEle = this.document.getElementById('btnStop');
    let variableTimeout;
    let timeInterval;

    checkFunction = function() {
        const buttonEle = document.querySelector(".btn.btn-info.dnut");
        const audioEle = document.querySelector('i.fa.fa-play-circle.daudio');
        const textEle = document.querySelector('.danw.dinline');
        const radioEle = document.querySelector('input.deck');
        const listenEle = document.querySelector('.dtitle');
        const dviewEle = document.querySelector('.dview.sortable');
        
        if(audioEle && !listenEle && !dviewEle){
            return audioFunction();
        }
        if(textEle){
            return textFunction();
        }
        if(radioEle){
            return radioFunction();
        }
        if(listenEle && !dviewEle){
            return listenFunction();
        }
        if(!radioEle && buttonEle && !dviewEle){
            return buttonFunction();
        }
        if(dviewEle){
            alert("Stop Tool! Hãy tự hoàn thành task và bật lại Tool.");
            stopEle.click();
        }
        if(!audioEle  && !textEle  && !radioEle && !listenEle && !dviewEle && !buttonEle){
            stopEle.click();
        }
    }
    
    function checkInterval() {
        timeInterval = setInterval(checkFunction, 75*1000);
    }
    
    let timeValue;
    let additionalTime;
    let countdownInterval;
    let countdownTime;
    
    function initializeCountdown() {
        function startCountdown() {
            timeValue = timeElement.value;
            additionalTime = 15;
            countdownTime = timeValue * 1000 + additionalTime * 1000;
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
                startCountdown();
            }
        }
        if(countdownTime < 0){
            startCountdown();
        }
        startCountdown();
    }

    if(startEle !== null){
        startEle.addEventListener('click', function(e) {
            e.preventDefault();
            alert("Start Tool");
            startEle.style.color = "red";
            stopEle.style.color = "";
            initializeCountdown();
            checkFunction();
            checkInterval();
        }
    )
    }
    
    if(stopEle !== null){
        stopEle.addEventListener('click', function(e) {
            e.preventDefault();
            alert("Stop Tool!");
            startEle.style.color = "";
            stopEle.style.color = "red";
            clearInterval(timeInterval);
            clearInterval(variableTimeout);
            clearInterval(countdownInterval);
            document.getElementById("countDown").innerHTML = "--:--";
        }
        )
    }
})
