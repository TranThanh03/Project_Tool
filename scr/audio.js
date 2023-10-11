const checkTimoutAuddio = [];
const audioFunction = function(timeValue, checkStop) {
    const playAudio = document.querySelectorAll('i.fa.fa-play-circle.daudio');
    const buttonAudio = document.querySelector(".btn.btn-info.dnut");

    if(checkStop === true) {
        for(let i=0; i<2; i++) {
            clearTimeout(checkTimoutAuddio[i]);
        }
    }
    else {
        checkTimoutAuddio[0] = setTimeout(() => {
            for(let i=0; i<playAudio.length; i++)
                {
                    playAudio[i].click();
                }
        }, 30*1000);        
        
        checkTimoutAuddio[1] = setTimeout(() => {
            buttonAudio.click();
        }, timeValue*1000)
    }
}