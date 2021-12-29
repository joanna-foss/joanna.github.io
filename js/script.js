console.log("Thank you for visiting, my fellow web traverser. ^_^");
console.log("My apologies, but my site is still under construction. It will be tidied up soon.");
console.log("Please return for an update at a later time.");

$(window).resize(function() {
    $('#header-content').height($(window).height());
});

$(window).trigger('resize');

function headerText(arrOfText, id, arrOfColors){ //refactor needed - CBB
    if(arrOfColors === undefined){
        arrOfColors = ['#000'];
    }
    let visible = true;
    let underscore = document.getElementById('underscore');
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    let target = document.getElementById(id);
    target.setAttribute('style', 'color:' + arrOfColors[0]);
    window.setInterval(()=>{
        if(letterCount === 0 && waiting === false){
            waiting = true;
            target.innerHTML = arrOfText[0].substring(0, letterCount);
            window.setTimeout(()=>{
                let usedColor = arrOfColors.shift();
                arrOfColors.push(usedColor);
                let usedText = arrOfText.shift();
                arrOfText.push(usedText);
                x = 1;
                target.setAttribute('style', 'color:' + arrOfColors[0]);
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (letterCount === arrOfText[0].length + 1 && waiting === false){
            waiting = true;
            window.setTimeout(()=>{
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (waiting === false){
            target.innerHTML = arrOfText[0].substring(0, letterCount);
            letterCount += x;
        }
    }, 125);
    window.setInterval(()=>{
        if(visible === true){
            underscore.className = 'underscore hidden';
            visible = false;
        } else {
            underscore.className = 'underscore';
            visible = true;
        }
    }, 400);
}

headerText(["A software developer.", "A USAF veteran.", "A chess enthusiast."], "header-text", ['blue', 'orangered', 'rebeccapurple', 'deeppink']);