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
        else if(imageDataUrl === 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAAQElEQVR4nGNgGAWjgETAiEvCNyC4gYGBoZ6BgYF184a1f9D55FrIRK7GUQtHLRy1cNTCwWvhKBgFo2AUjIIhCACHxAoYYIsG1wAAAABJRU5ErkJggg==') {
            arrayText.push('II');
        }
        else if(imageDataUrl === 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAeCAYAAACmPacqAAABCklEQVR4nO3TwSpEURjA8Z+JhWKFlWRl6wmslCx06+YmKZ7FPMqMKMnJrbOyYmFjaasseAELkR2LOQtNJsOMkTr/3T3fWfzq3I9c7h831mtQlFUT+5jAOZawGOvw9sndZdxgN9bh6KeYRp/32ljASo/5Hp5w9lPIdzABz9jpHhRl1UjnJ7EOL7+OiXV4TqCtoqzGu8armEdrEEjfmFQbs1jrOt/FXazD1SgxF3jw4amKsprEpg504PrGpC06RJkQUGIKByPFpNqYxkb63sNlrMP9yDGxDre4xk5RVnM6/09rGJBvY1JtrGMbrzpb9meYY4yjidO09n+DiXV4RMSMIT5RLpfL5XK5L3oHYoFBCetzWnIAAAAASUVORK5CYII=') {
            arrayText.push('IV');
        }
        else if(imageDataUrl === 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAADU8sWcAAABAklEQVR4nO3TsUoDQRSF4U9JI2ilViJWtj6BlSAWsrC4iASSd/FRElEQcXBhatHCxtJWsNAXsJCInRaZQkJWIdmk2r+bc4r/MjOXhoY5sjAuzPLiFtvYimX4HtPv4AmdWIaLSeWLFXkfm9it6Lv4wM2k4r/kAQO0R4ssLxZTfhXL8Fm7PJZhkAY4zvKiNVLvYQO9acSV8kQfa9gfyTt4iWV4mKX8Dm9+XX2WF0s4SoNNTaU8/fJz5EkKOZZxNlN5oo8VHKZzF/exDK8zl8cyPOMR7Swv1g3fv1eH+F95oo8DnODLcAvmJr9EC6e4Tms4H3kswzsiVtV45Q0NDQ0NDbXzA2XvQAm1ly9NAAAAAElFTkSuQmCC') {
            arrayText.push('V');
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
                        let newText = text.replace(/\|/g, 'I').replace(/\n/g, '').replace(/Cc/g, 'C').replace(/Intemnet/g, 'Internet').replace(/intemnet/g, 'internet').replace(/Whois/g, 'Who is').replace(/Itis/g, 'It is').replace(/Il/g, "I'll").replace(/I'l/g, "I'll").replace(/Abit/g, "A bit");
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
        }, 5*1000);
        
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