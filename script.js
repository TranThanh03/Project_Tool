let htmlTemplate = `
        <div class="btnElement">
            <button type="button" id="btnStart">Start</button>
            <button type="button" id="btnStop">Stop</button>
        </div>
    `;

window.onload = function() {
    const wrapperObject = document.querySelector('body>div#dgmain');
    if(wrapperObject !== null){
        wrapperObject.innerHTML += htmlTemplate;
    }
    
    const startEle = document.getElementById('btnStart');
    const stopEle = document.getElementById('btnStop');

    audioFunction = function() {
        const playAudio = document.querySelectorAll('i.fa.fa-play-circle.daudio');
        const buttonAudio = document.querySelector(".btn.btn-info.dnut");
        for(let i=0; i<playAudio.length; i++)
        {
            playAudio[i].click();
        }
        setTimeout(function() {
            buttonAudio.click();
        }, 120*1000)
    }

    textFunction = function() {
        const buttonInfo = document.querySelector(".btn.btn-info.dnut");
        const buttonDanger = document.querySelector(".btn.btn-danger.dnut");
        const inputElements = document.querySelectorAll('.danw.dinline');
        
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
            let buttonPrimary = document.querySelector("button.btn.dnut.btn-primary");
            buttonPrimary.click();
        }, 40*1000);
        setTimeout(function() {
            for (let i = 0; i < inputElements.length; i++) {
                inputElements[i].value = inputElements[i].placeholder;
        }
        }, 45*1000);
        setTimeout(function() {
            buttonInfo.click();
        }, 130*1000);
    }

    radioFunction = function(){    
        const buttonInfo = document.querySelector(".btn.btn-info.dnut");
        const buttonDanger = document.querySelector(".btn.btn-danger.dnut");
        const valuesArray = [];
        const deckInputs = document.querySelectorAll('input.deck');
        const deckInss = document.querySelectorAll('.iCheck-helper');
        deckInputs.forEach(function(deckInput, index) {
        let valueInput = deckInput.value;
        if (valueInput.endsWith('0')) {
        deckInss[index].click();
        }
        });

        setTimeout(function() {
            buttonInfo.click();
        }, 30*1000);
        setTimeout(function() {
            buttonDanger.click();
            setTimeout(function() {
            const divElements = document.querySelectorAll('.iradio_square-green.checked');
            divElements.forEach(function(divElement) {
            const inputElement = divElement.querySelector('input.deck');
            const inputValue = inputElement.value;
            valuesArray.push(inputValue);
            });
        }, 3*1000);
        }, 33*1000);
        setTimeout(function() {
            let buttonPrimary = document.querySelector("button.btn.dnut.btn-primary");
            buttonPrimary.click();
        }, 45*1000);
        setTimeout(function() {
            deckInputs.forEach(function(deckInput, index) {
            if (valuesArray.includes(deckInput.value)) {
                deckInss[index].click();
            }
            });
        }, 47*1000);
        setTimeout(function() {
            buttonInfo.click();
        }, 90*1000);
    }

    buttonFunction = function(){
        const buttonDanger = document.querySelector(".btn.btn-info.dnut");
        setTimeout(function() {
            buttonDanger.click();
        }, 90*1000);
    }

    listenFunction = function() {
        const aDtitle = document.querySelectorAll('.dtitle');
        for (let i = 0; i < aDtitle.length; i++) {
            setTimeout(function() {
                aDtitle[i].click();
            }, i*10000);
        }
    }

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
            alert("Tool đã dừng! Hãy bật lại tool.");
            startEle.style.color = "";
            stopEle.style.color = "red";
            clearInterval(checkInterval);
        }
        if(!audioEle  && !textEle  && !radioEle && !listenEle && !dviewEle && !buttonEle){
            alert("Tool đã dừng! Hãy bật lại tool.");
            startEle.style.color = "";
            stopEle.style.color = "red";
            clearInterval(checkInterval);
        }
    }
    
    let checkInterval = setInterval(checkFunction, 145*1000);

    startEle.addEventListener('click', function() {
        checkFunction();
        checkInterval = setInterval(checkFunction, 145*1000);
        startEle.style.color = "red";
        stopEle.style.color = "";
    })
    
    stopEle.addEventListener('click', function() {
        clearInterval(checkInterval);
        alert("Tool đã dừng!");
        startEle.style.color = "";
        stopEle.style.color = "red";
    })
}

    
