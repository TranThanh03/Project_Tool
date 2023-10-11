const checkTimeoutText = [];
const textFunction = function(timeValue, checkStop) {
    let arrayText = [];
    const buttonInfo = document.querySelector(".btn.btn-info.dnut");
    const buttonDanger = document.querySelector(".btn.btn-danger.dnut");
    const inputElements = document.querySelectorAll('.danw.dinline');

    function scanImage(imageDataUrl) {
        if(imageDataUrl === 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAYAAAA2Lt7lAAAAOUlEQVR4nGNgGAXDHjDikvANCG5gYGCoZ2BgYN28Ye0fci1gIlfjqAWjFoxaMJIsGAWjYBSMghEBAGZGBRjHsd/rAAAAAElFTkSuQmCC') {
            arrayText.push('I');
        }
        else if(imageDataUrl === 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAYAAAA2Lt7lAAAAMklEQVR4nGNgGAUjF/gGBH/wDQiuGGh3DGJArSBiooZjRi0YtWCIWzAKRsEoGAUjAgAALHwGoQoisUEAAAAASUVORK5CYII=') {
            arrayText.push('i');
        }
        else if(imageDataUrl === 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAeCAYAAADZ7LXbAAAAX0lEQVR4nO3QwQmAMAxG4YcU6hoOFAhkFadwEadwAndwCvHsVYrHgEj/75hDX1IQeTKP0zzmr/f4iczvGjIeUUSRjiMFuDIipR2YxwhMQAWOjMjbJQuwAyuwZUREpCc3a3MMWgljxiYAAAAASUVORK5CYII=') {
            arrayText.push('j');
        }
        else if(imageDataUrl === 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAABCUlEQVR4nO3UMUoDQRSH8V9UsBYFeztBvIIiId3K4lpE8AAWioWVR8gZBCs7WVjcRkE70QPYWFmJEkSs7IxYbAJBkoCMgRTzwRbzfzDf7Nt9QyQSmXRqwwpJms2ihR1M4wavqJdFvhIinRpRO8EWUizjHYchsh4zg8IkzZawi2ZZ5Pfd7ACN/5AOe9M1Veuve0FZ5J3+9TikC/jGx6/8bZzSl25tbsBhxia9QwfrvSBJs1r/OoRRI3Oq+rZNPOEYR3goi3w1RDpqZPZxhUs8Yh7n+AwR/pkkzS6SNDsL3WfYnC6qfqZW9/lSXRQN1EOlA9tbFnkb29jAM9rYw2ZZ5Leh0kgkEpkcfgD0PjdojM9GgwAAAABJRU5ErkJggg==') {
            arrayText.push('g');
        }
        else {
            return new Promise((resolve, reject) => {
                    const byteCharacters = atob(imageDataUrl.split(',')[1]);
                    const byteNumbers = new Array(byteCharacters.length);

                    for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                    }

                    const byteArray = new Uint8Array(byteNumbers);
                    const blob = new Blob([byteArray], { type: 'image/png' });

                    const reader = new FileReader();

                    reader.onload = function (e) {
                    Tesseract.recognize(e.target.result, 'eng').then(({ data: { text } }) => {
                        let newText = text.replace(/\|/g, 'I').replace(/\n/g, '').replace(/Cc/g, 'C').replace(/Intemnet/g, 'Internet').replace(/intemnet/g, 'internet');
                        arrayText.push(newText);
                        resolve();
                    });
                };

                reader.readAsDataURL(blob);
            });
        }
    }

    async function processImages() {
        for (let i = 0; i < inputElements.length; i++) {
            let backgroundImageUrl = window.getComputedStyle(inputElements[i]).getPropertyValue("background-image");
            backgroundImageUrl = backgroundImageUrl.replace(/url\(['"]?(.*?)['"]?\)/, '$1');
            await scanImage(backgroundImageUrl);
        }
    }
    
    if(checkStop === true) {
        for(let i=0; i<7; i++) {
            clearTimeout(checkTimeoutText[i]);
        }
    }
    else {
        checkTimeoutText[0] = setTimeout(() => {
            for (let i = 0; i < inputElements.length; i++) {
                inputElements[i].value = "a";
            }
        }, 10*1000);
        
        checkTimeoutText[1] = setTimeout(() => {
            buttonInfo.click();
        }, 30*1000);
        
        checkTimeoutText[2] = setTimeout(() => {
            buttonDanger.click();
        }, 35*1000);
    
        checkTimeoutText[3] = setTimeout(() => {
            processImages();
        }, 40*1000);
        
        checkTimeoutText[4] = setTimeout(() => {
            let buttonPrimary = document.querySelector(".btn.dnut.btn-primary");
            buttonPrimary.click();
        }, 100*1000);
        
        checkTimeoutText[5] = setTimeout(() => {
            for (let i = 0; i < inputElements.length; i++) {
                inputElements[i].value = arrayText[i];
        }
        }, 105*1000);
        
        checkTimeoutText[6] = setTimeout(() => {
            buttonInfo.click();
        }, timeValue*1000);
    }
}