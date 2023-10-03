audioFunction = function(timeValue, variableTimeout) {
    const playAudio = document.querySelectorAll('i.fa.fa-play-circle.daudio');
    const buttonAudio = document.querySelector(".btn.btn-info.dnut");
    for(let i=0; i<playAudio.length; i++)
    {
        playAudio[i].click();
    }
    variableTimeout = setTimeout(function() {
        buttonAudio.click();
    }, timeValue*1000)
}