


/**
 * Bridge 1 - You handle the small potato
 */

function bridge1() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'){
        image.style.backgroundImage = "url('./img/x.svg')";     
        gameTexts.innerHTML = 'Din potatis spöar lilla potatisen Bruse.<br><br>' + 
                                ' 1. Fortsätt gå.';

    }else if(playerInput == '2'){ 
        image.style.backgroundImage = "url('./img/x.svg')";
        gameTexts.innerHTML = 'Du passerar lilla potatisen Bruse.<br><br>' + 
                                ' 1. Fortsätt gå.';
        button.onclick = bridge1;

    }else{
        image.style.backgroundImage = "url('./img/x.svg')";
        gameTexts.innerHTML = '<b>Lilla Potatisen Bruse:</b>-<q> Eh, va?</q> <br><br>' + 
                                ' 1. Puckla på Lilla Potatisen Bruse<br>' + 
                                ' 2. Gå förbi Lilla Potatisen Bruse.';
        button.onclick = bridge1;
                                                                                                                                     
    }
}

/**
 * Bridge 2 - You encounter a medium potato
 */

function bridge2() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'||'2'||'3'){
        image.style.backgroundImage = "url('./img/x.svg')";
        gameTexts.innerHTML = 'Snart skådar ni en medium, medium potatis. Och den börjar också tala...<br>' + 
                                '<b>Mellan Potatisen Bruse:</b>-<q> Nej, nej ta inte mig. Ta Stora Potatisen Bruse istället.</q> <br><br>' + 
                                ' 1. Puckla på Mellan Potatisen Bruse<br>' + 
                                ' 2. Gå förbi Mellan Potatisen Bruse';
        button.onclick = bridge3;
    }else{
        image.style.backgroundImage = "url('./img/x.svg')";
        gameTexts.innerHTML = 'Snart skådar ni en medium, medium potatis. Och den börjar också tala...<br>' + 
                                '<b>Mellan Potatisen Bruse:</b>-<q> Nej, nej ta inte mig. Ta Stora Potatisen Bruse istället.</q> <br><br>' + 
                                ' 1. Puckla på Mellan Potatisen Bruse<br>' + 
                                ' 2. Gå förbi Mellan Potatisen Bruse';
        button.onclick = bridge3;                  
    }
}

/**
 * Bridge 3 - You handle the medium potato
 */

function bridge3() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'){
        image.style.backgroundImage = "url('./img/x.svg')";     
        gameTexts.innerHTML = 'Din potatis spöar Mellan Potatisen Bruse.<br><br>' + 
                                ' 1. Fortsätt gå.';
        button.onclick = bridge4;

    }else if(playerInput == '2'){ 
        image.style.backgroundImage = "url('./img/x.svg')";
        gameTexts.innerHTML = 'Du passerar Mellan Potatisen Bruse.<br><br>' + 
                                ' 1. Fortsätt gå.';
        button.onclick = bridge5;

    }else{
        image.style.backgroundImage = "url('./img/x.svg')";
        gameTexts.innerHTML = '<b>Mellan Potatisen Bruse:</b>-<q> Eh, va?</q> <br><br>' + 
                                ' 1. Puckla på Mellan Potatisen Bruse<br>' + 
                                ' 2. Gå förbi Mellan Potatisen Bruse.';
        button.onclick = bridge3;
                                                                                                                                     
    }
}

function bridge4() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'||'2'||'3'){
        image.style.backgroundImage = "url('./img/x.svg')";
        gameTexts.innerHTML = 'Efter att ha spöat Mellan Potatisen Bruse så har nu din Potatis tillräckligt med Potatis Poäng® för att kartoffolveras till <b>Supotatis</b>' + 
                                ' 1. Fortsätt gå.';
        button.onclick = supotatis1;
    }
}