const audioFunction = function(timeValue) {
    const playAudio = document.querySelectorAll('i.fa.fa-play-circle.daudio');
    const buttonAudio = document.querySelector(".btn.btn-info.dnut");
    setTimeout(function() {
        for(let i=0; i<playAudio.length; i++)
            {
                playAudio[i].click();
            }
    }, 5*1000);        
    setTimeout(function() {
        buttonAudio.click();
    }, timeValue*1000)
}