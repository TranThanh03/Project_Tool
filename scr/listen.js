listenFunction = function() {
    const aDtitle = document.querySelectorAll('.dtitle');
    let currentIndex = 0;

    function clickNextItem() {
        if (currentIndex < aDtitle.length) {
            aDtitle[currentIndex].click();
            currentIndex++;
            variableTimeout = setTimeout(clickNextItem, 10 * 1000);
        }
    }
    setTimeout(clickNextItem, 10 * 1000);
}