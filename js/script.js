console.log("Thank you for visiting, my fellow web traverser. ^_^");
console.log("My site is still under construction. It will be tidied up soon.");
console.log("Please return for an update at a later time.");

$(window).resize(function() {
    $('#header-content').height($(window).height());
});

$(window).trigger('resize');

function interestsText(arrOfInterests, id){
    let target = document.getElementById(id);
    window.setInterval(()=>{
        target.innerHTML = arrOfInterests[0];
        let usedInterest = arrOfInterests.shift();
        arrOfInterests.push(usedInterest);
    }, 2000);
}

function unhide(id1, id2) {
    let element1 = document.getElementById(id1);
    let element2 = document.getElementById(id2);
    element1.classList.remove('hidden');
    element2.remove();
}

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
interestsText(["adventuring 🧗🏻‍♀️", "cats 🐈‍⬛", "♟️ chess", "coding 👩🏻‍💻", "☕️ coffee", "dogs 🐕", "hiking 🥾", "🌳 trees 🌳", "thai food 🍲", "🏖 beaches", "mountains 🏔"], "interests-text");
headerText(["software developer", "USAF veteran", "chess enthusiast"], "header-text", ['blue', 'orangered', 'rebeccapurple', 'deeppink']);
