let arrayText = [];

function scanImage(imageDataUrl) {
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
                let newText = text.replace(/\|/g, 'I').replace(/\n/g, '').replace(/Cc/g, 'C');
                arrayText.push(newText);
                resolve();
            });
        };

        reader.readAsDataURL(blob);
    });
}

async function processImages() {
    let inputElements = document.querySelectorAll(".danw.dinline");

    for (let i = 0; i < inputElements.length; i++) {
        let backgroundImageUrl = window.getComputedStyle(inputElements[i]).getPropertyValue("background-image");
        backgroundImageUrl = backgroundImageUrl.replace(/url\(['"]?(.*?)['"]?\)/, '$1');
        await scanImage(backgroundImageUrl);
    }
}

textFunction = function(timeValue) {
    arrayText = [];
    let variableTimeout;
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
    }, 33*1000);
    setTimeout(function() {
        processImages();
    }, 36*1000);
    setTimeout(function() {
        let buttonPrimary = document.querySelector(".btn.dnut.btn-primary");
        buttonPrimary.click();
    }, 50*1000);
    setTimeout(function() {
        for (let i = 0; i < inputElements.length; i++) {
            inputElements[i].value = arrayText[i];
    }
    }, 53*1000);
    variableTimeout = setTimeout(function() {
        buttonInfo.click();
    }, timeValue*1000)
}