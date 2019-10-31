
/**
 * Dating Sim
 */


/**
 * Dating Sim 1
 */

function datingsim1() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'){
        image.style.backgroundImage = "url('./img/inihiss.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b>-<q> Uff, den se trång ut. Ta din potatis och åk utan mig. </q> <br><br>' + 
                                ' 1. Gå in i hissen <br> ' + 
                                ' 2. Leta efter andra omvägar i trakten';
        button.onclick = datingsim2;

    }else if(playerInput == '2'){ 
        image.style.backgroundImage = "url('./img/inihiss.svg')";
        gameTexts.innerHTML = 'Nä men!? Där var ju en hiss. Det är trångt. Men du och din potatis får plats. <br><br>' + 
                                ' 1. Gå in i hissen <br> ' + 
                                '2. Leta efter andra omvägar i trakten';
        button.onclick = datingsim2;
    }else{
        image.style.backgroundImage = "url('./img/fattarinte.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b>-<q> Va? Vad vill du göra. </q> <br><br>' + 
                                ' 1. Gå in i hissen <br> ' + 
                                ' 2. Leta efter andra omvägar i trakten.';
        button.onclick = datingsim2;
                                                                                                                                     
    }
}

/**
 * Dating Sim 2 - GO INTO THE ELEVATOR
 */

function datingsim2() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'){
        image.style.backgroundImage = "url('./img/hissner.svg')";
        gameTexts.innerHTML = 'Hissen åker neråt.  <br><br>' + 
                                ' 1. Vänta';
        button.onclick = datingsim3;
    }else if(playerInput == '2'){ 
        image.style.backgroundImage = "url('./img/potatisfattarinte.svg')";
        gameTexts.innerHTML = 'Det ser tomt ut runtomkring. <br><br>' + 
                                ' 1. Ta hissen';
        button.onclick = datingsim3;
    }else{
        image.style.backgroundImage = "url('./img/potatisfattarinte.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b>-<q> Va? Vet inte riktigt vad du menar? </q> <br><br>' + 
                                ' 1. Okej, jag tar med mig potatisen på en hisstur <br>' + 
                                ' 2. Okej, potatisen och jag tar en hisstur.';
        button.onclick = datingsim3;
                                                                                                                                     
    }
}

/**
 * Dating Sim 3 - Waiting in the elevator
 */

function datingsim3() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'){
        image.style.backgroundImage = "url('./img/hissner.svg')";
        gameTexts.innerHTML = 'Hissen åker neråt. Tiden går...  <br><br>' + 
                                ' 1. Vänta <br>' + 
                                ' 2. Fråga potatisen -<q> Sååå hänger du här ofta?</q><br>';
        button.onclick = datingsim4;
    }else{
        image.style.backgroundImage = "url('./img/hissner.svg')";
        gameTexts.innerHTML = 'Hissen åker neråt. Tiden går...  <br><br>' + 
                                ' 1. Vänta <br> ' + 
                                '2. Fråga potatisen -<q> Sååå hänger du här ofta?</q><br>';
        button.onclick = datingsim4;
                                                                                                                                     
    }
}

/**
 * Dating Sim 4 - The dating game begins
 */

function datingsim4() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'){
        image.style.backgroundImage = "url('./img/hissner-dating1.svg')";
        gameTexts.innerHTML = '<b>Potatis:</b>-<q> Nåväl. Mitt namn är ポテト-san. Jag flyttade nyligen hit till källaren för att finna lyckan.</q>  <br><br>' + 
                                ' 1. Så du är en fast potatis... Då antar jag att du är sorten Princess. <br>' + 
                                ' 2. Du var då en het potatis. Men jag kommer nog ändå inte att undvika dig. <br>' + 
                                ' 3. Du hade passat både som en måling och som Pommes Frites. I olja.';
        button.onclick = datingsim5;
    }else if(playerInput == '2'){ 
        image.style.backgroundImage = "url('./img/hissner-dating1.svg')";
        gameTexts.innerHTML = 'Nä men!? Där var ju en hiss. Det är trångt. Men du och din potatis får plats. <br><br>' + 
                                ' 1. Gå in i hissen <br> ' +
                                ' 2. Leta efter andra omvägar i trakten';
        button.onclick = datingsim4;
    }else{
        image.style.backgroundImage = "url('./img/hissner.svg')";
        gameTexts.innerHTML = 'Inget händer. Hissen fortsätter åka. Tiden går... </q> <br><br>' + 
                                ' 1. Vänta <br>' + 
                                ' 2. Fråga potatisen -<q> Sååå hänger du här ofta?</q><br>';
        button.onclick = datingsim4;
                                                                                                                                     
    }
}

/**
 * Dating Sim 5 - You say something stupid
 */

function datingsim5() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'||'2'||'3'){
        image.style.backgroundImage = "url('./img/hissner-dating2.svg')";
        gameTexts.innerHTML = '<b>Potatis:</b> -<q> Ah, va gulligt utav dig. <br> Senpai. </q> <br><br>' + 
                                ' 1. Varför kallas det strips? Jag tror att du kan visa mig. <br>' + 
                                ' 2. Jag har en potatisstöt. Vill du hem till mig och testa den?. <br>' + 
                                ' 3. Sugen på att göra en halv special? Du vet, korv med mos.';
        button.onclick = datingsim6;
    }else{
        image.style.backgroundImage = "url('./img/hissner-dating2.svg')";
        gameTexts.innerHTML = '<b>Potatis:</b> -<q> Ah, va gulligt utav dig. <br> Senpai. </q> <br><br>' + 
                                ' 1. Varför kallas det strips? Jag tror att du kan visa mig. <br>' + 
                                ' 2. Jag har en potatisstöt. Vill du hem till mig och testa den?. <br>' + 
                                ' 3. Sugen på att göra en halv special? Du vet, korv med mos.';
        button.onclick = datingsim6;
    }
}

/**
 * Dating Sim 6 - You try to appease the potato
 */

function datingsim6() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'||'2'||'3'){
        image.style.backgroundImage = "url('./img/hissner-dating3.svg')";
        gameTexts.innerHTML = '<b>Potatis:</b> -<q> Jag är inte den den typen utav potatis. <br> Din Knöl. </q> <br><br>' + 
                                ' 1. Jag är hemsk ledsen men jag vill ha ditt efternamn, är det Jansson? <br>' + 
                                ' 2. Förlåt att jag är framfusig men du råkar inte vara en Asterix? För i fotnoten står det marriage material. <br> ' + 
                                ' 3. Jag är ledsen men jag har inte varit komplett tills jag mötte dig. Vill du vara klyftpotatisen som gör det helt.';
        button.onclick = datingsim7;
    }else{
        image.style.backgroundImage = "url('./img/hissner-dating3.svg')";
        gameTexts.innerHTML = '<b>Potatis:</b> -<q> Jag är inte den den typen utav potatis. <br> Din Knöl. </q> <br><br>' + 
                                ' 1. Jag är hemsk ledsen men jag vill ha ditt efternamn, är det Jansson? <br>' + 
                                ' 2. Förlåt att jag är framfusig men du råkar inte vara en Asterix? För i fotnoten står det marriage material. <br>' + 
                                ' 3. Jag är ledsen men jag har inte varit komplett tills jag mötte dig. Vill du vara klyftpotatisen som gör det helt.';
        button.onclick = datingsim7;
    }
}

/**
 * Dating Sim 7 - Happy ever after
 */

function datingsim7() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'||'2'||'3'){
        image.style.backgroundImage = "url('./img/hissner-dating5.svg')";
        gameTexts.innerHTML = '<b>Potatis:</b> -<q> Awwww.</q> <br> Och stod ni pratade långt efter att hissen stannat. <br> Ett tag efter det friade Potatis. Ni gifte er året efter... <br><br>' + 
                                ' 1. Fortsätt';
        button.onclick = datingsim8;
    }else{
        image.style.backgroundImage = "url('./img/hissner-dating5.svg')";
        gameTexts.innerHTML = '<b>Potatis:</b> -<q> Awwww.</q> <br> Och stod ni pratade långt efter att hissen stannat. <br> Ett tag efter det friade Potatis.<br> Ni gifte er året efter... <br><br>' + 
                                ' 1. Fortsätt';
        button.onclick = datingsim8;
    }
}


/**
 * Dating Sim 8 - Happy ever after - High Score
 */
function datingsim8() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'||'2'||'3'){
        image.style.backgroundImage = "url('./img/highscore2.svg')";
        gameTexts.innerHTML = '....Och ni levde lyckligt i alla era dagar';
        button.value = 'Börja Om';
        button.onclick = restartGame;

        
    }else{
        image.style.backgroundImage = "url('./img/highscore2.svg')";
        gameTexts.innerHTML = '....Och ni levde lyckligt i alla era dagar.';
        button.onclick = restartGame;

    }
}