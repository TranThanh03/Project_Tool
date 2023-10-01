
var arrayText = [];
var listText = [];

function processImage(imageDataUrl) {
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
        let newText = text.replace(/\|/g, 'I').replace(/\n/g, '');
        arrayText.push(newText);
        resolve();
      });
    };

    reader.readAsDataURL(blob);
  });
}

async function processImages() {
  const inputElements = document.querySelectorAll(".danw.dinline");

  for (let i = 0; i < inputElements.length; i++) {
    let backgroundImageUrl = window.getComputedStyle(inputElements[i], null).getPropertyValue("background-image");
    backgroundImageUrl = backgroundImageUrl.replace(/url\(['"]?(.*?)['"]?\)/, '$1');
    listText.push(backgroundImageUrl);
  }

  for (let i = 0; i < listText.length; i++){
    await processImage(listText[i]);
  }

  for (let i = 0; i < inputElements.length; i++) {
    inputElements[i].style.backgroundImage = "none";
    inputElements[i].value = arrayText[i];
  }
}

processImages();

