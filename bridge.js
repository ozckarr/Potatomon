


/**
 * Bridge 1 - You handle the small potato
 */

function bridge1() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'){
        image.style.backgroundImage = "url('./img/lillapotatisenbruse-kicked.svg')";     
        gameTexts.innerHTML = 'Din potatis spöar lilla potatisen Bruse.<br><br>' + 
                                ' 1. Fortsätt gå.';
        button.onclick = bridge2;

    }else if(playerInput == '2'){ 
        image.style.backgroundImage = "url('./img/lillapotatisenbruse-letgo.svg')";
        gameTexts.innerHTML = 'Du passerar lilla potatisen Bruse.<br><br>' + 
                                ' 1. Fortsätt gå.';
        button.onclick = bridge2;

    }else{
        image.style.backgroundImage = "url('./img/lillapotatisenbruse-what.svg')";
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
        image.style.backgroundImage = "url('./img/mellanpotatisenbruse.svg')";
        gameTexts.innerHTML = 'Snart skådar ni en medium, medium potatis. Och den börjar också tala...<br>' + 
                                '<b>Mellan Potatisen Bruse:</b>-<q> Nej, nej ta inte mig. Ta Stora Potatisen Bruse istället.</q> <br><br>' + 
                                ' 1. Puckla på Mellan Potatisen Bruse<br>' + 
                                ' 2. Gå förbi Mellan Potatisen Bruse';
        button.onclick = bridge3;
    }else{
        image.style.backgroundImage = "url('./img/mellanpotatisenbruse.svg')";
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
        image.style.backgroundImage = "url('./img/mellanpotatisenbruse-kicked.svg')";     
        gameTexts.innerHTML = 'Din potatis spöar Mellan Potatisen Bruse.<br><br>' + 
                                ' 1. Fortsätt gå.';
        button.onclick = bridge4;

    }else if(playerInput == '2'){ 
        image.style.backgroundImage = "url('./img/lillapotatisenbruse-letgo.svg')";
        gameTexts.innerHTML = 'Du passerar Mellan Potatisen Bruse.<br><br>' + 
                                ' 1. Fortsätt gå.';
        button.onclick = bridge5;

    }else{
        image.style.backgroundImage = "url('./img/mellanpotatisenbruse-what.svg')";
        gameTexts.innerHTML = '<b>Mellan Potatisen Bruse:</b>-<q> Eh, va?</q> <br><br>' + 
                                ' 1. Puckla på Mellan Potatisen Bruse<br>' + 
                                ' 2. Gå förbi Mellan Potatisen Bruse.';
        button.onclick = bridge3;
                                                                                                                                     
    }
}

/**
 * Bridge 4 - You evolve to the superspud and ar sent to supotatis.js
 * Note: Yes I could have done this in JS but it was a quick and fun thing
 *  and it would have been copy+paste from the lesson. Instead I learned a
 * new thing in photoshop.
 */

function bridge4() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');
    image.style.backgroundImage = "url('./img/kartoffelsion.gif')";

    setTimeout(changeImage, 5000);

    function changeImage(){
        image.style.backgroundImage = "url('./img/kartoffelsion-0.svg')";
    }

    gameTexts.innerHTML = 'Efter att ha spöat Mellan Potatisen Bruse så har din Potatis över 9000 PotatisPoäng®. <br>' + 
                            'Tillräckligt med för att kartoffolveras till <b>Supotatis</b>  <br><br>' + 
                            ' 1. Fortsätt gå.';
    button.onclick = supotatis1;
}

/**
 * Bridge 5 - You encounter a large potato
 */

function bridge5() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    image.style.backgroundImage = "url('./img/storapotatisenbruse.svg')";
    gameTexts.innerHTML = 'Snart skådar ni en stor, stor potatis.<br>' + 
                            '<b>Stora Potatisen Bruse:</b>-<q> <b>GLARGHHH!!</b>.</q> <br><br>' + 
                            ' 1. Puckla på Stora Potatisen Bruse<br>' + 
                            ' 2. Gå förbi Stora Potatisen Bruse';
    button.onclick = bridge6;                  
}

/**
 * Bridge 6 - You interact with the large potato
 */

function bridge6() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'){
        image.style.backgroundImage = "url('./img/storapotatisenbruse-kicked.svg')";     
        gameTexts.innerHTML = 'Din potatis kan inte göra en skråma på Stora Potatisen Bruse.<br>' + 
                                '<b>Professorn:</b>-<q> Hm, jag tror att vi borde sticka innan den blir irriterad.<br><br>' +
                                ' 1. Försök att puckla på Stora Potatisen Bruse igen<br>' + 
                                ' 2. Fly';
        button.onclick = bridge7;

    }else if(playerInput == '2'){ 
        image.style.backgroundImage = "url('./img/storapotatisenbruse-kicked.svg')";
        gameTexts.innerHTML = 'Stora Potatisen Bruse är för bred så ni kommer inte förbi. Stora Potatisen Bruse verkar bli irriterad utav försöken.<br>' + 
                                '<b>Professorn:</b>-<q> Hm, jag tror att vi borde sticka innan den blir allt för irriterad.<br><br>' +
                                ' 1. Dra in magen lite mer och kläm er fram hårdare<br>' +
                                ' 2. Fly' ;
        button.onclick = bridge7;

    }else{
        image.style.backgroundImage = "url('./img/storapotatisenbruse-what.svg')";
        gameTexts.innerHTML = '<b>Stora Potatisen Bruse:</b>-<q> <b>GRARKHH???</b></q> <br><br>' + 
                                ' 1. Puckla på Stora Potatisen Bruse<br>' + 
                                ' 2. Fly.';
        button.onclick = bridge7;
                                                                                                                                     
    }
}

/**
 * Bridge 7 - You and/or the proffesor dies - Flee
 */

function bridge7() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'){
        image.style.backgroundImage = "url('./img/highscore3.svg')";
        gameTexts.innerHTML = '....Och det sägs att att man kunde hitta delar utav en potatis, en proffessor och en protagonist runt om i potatiskällareni år sedan den dagen.';
        button.onclick = restartGame;

    }else if(playerInput == '2'){ 
        image.style.backgroundImage = "url('./img/storapotatisenbruse-fle.svg')";
        gameTexts.innerHTML = 'Stora Potatisen Bruse gör ett utfall när ni börjar springa. Du och potatis hinner ducka men Proffesorn slängs över kanten.<br>' + 
                                ' <b>Professorn:</b>-<q> <b>AAAAAAAA</B>AAAAAAAAᴀᴀᴀᴀᴀᴀᴀᴀᴬᴬᴬᴬᴬᴬᴬᴬ     <b>*Smäll*</b> <br><br>' +
                                ' 1. Försök att tala Stora Potatisen Bruse tillrätta<br>' +
                                ' 2. Fly, fast ännu snabbare' ;
        button.onclick = bridge8;

    }else{
        image.style.backgroundImage = "url('./img/storapotatisenbruse-what.svg')";
        gameTexts.innerHTML = '<b>Stora Potatisen Bruse:</b>-<q> <b>GRARKHH???</b></q> <br><br>' + 
                                ' 1. Ge dig på Stora Potatisen Bruse<br>' + 
                                ' 2. Fly';
        button.onclick = bridge7;
                                                                                                                                     
    }
}

/**
 * Bridge 7 - Repetition on 8 or going forward mourning the proffesor
 */

function bridge8() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'){
        image.style.backgroundImage = "url('./img/highscore3.svg')";
        gameTexts.innerHTML = '....Och det sägs att att man kunde hitta delar utav en potatis, en proffessor och en protagonist runt om i potatiskällareni år sedan den dagen.';
        button.onclick = restartGame;

    }else if(playerInput == '2'){ 
        image.style.backgroundImage = "url('./img/sorgligt.svg')";
        gameTexts.innerHTML = 'Ni är i säkerhet. Men till vilket pris? Proffessorn har stupat.<br><br>' + 
                                ' 1. Gråt en skvätt <br>' +
                                ' 2. Skrik till <s>skyarna</s> taket. -<q> <b>ACK, DET SKULLE HA VARIT JAG! OH, GRYMMA ÖDE!</b></q><br>' +
                                ' 3. Konstatera att situationen är lite tråkig ';
        button.onclick = bridge9;
    }else{
        image.style.backgroundImage = "url('./img/storapotatisenbruse-what.svg')";
        gameTexts.innerHTML = '<b>Stora Potatisen Bruse:</b>-<q> <b>GRARKHH???</b></q> <br><br>' + 
                                ' 1. Försök att tala Stora Potatisen Bruse tillrätta <br>' + 
                                ' 2. Fly';
        button.onclick = bridge7;
                                                                                                                                     
    }
}

/**
 * Bridge 8 - Proffesor tr
 */

function bridge9() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    image.style.backgroundImage = "url('./img/sorgligt.svg')";
    gameTexts.innerHTML = 'Du hör en röst.<br>' + 
                            '<b>Röst:</b>-<q> <b>SIMBA!</b>.</q> <br><br>' + 
                            ' 1. Du är för sorgsen för att notera något<br>' + 
                            ' 2. Titta upp';
    button.onclick = bridge10;                  
}

function bridge10() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'){
        image.style.backgroundImage = "url('./img/sorgligt.svg')";
        gameTexts.innerHTML = 'Då hör rösten igen en röst.<br>' + 
                                '<b>Röst:</b>-<q> <b>SIMBA!!!</b>.</q> <br><br>' + 
                                ' 1. Du är för sorgsen för att notera något<br>' + 
                                ' 2. Titta upp';
        button.onclick = bridge9;

    }else if(playerInput == '2'){ 
        image.style.backgroundImage = "url('./img/proffessorn-return.svg')";
        gameTexts.innerHTML = 'Du ser en genomskinlig gestalt. Det är proffessorn, talandes från andra sidan.<br>' + 
                                '<b>Proffesorn:</b>-<q> <b>BuuUUUuh! Jag menar, du är den utvalde, använd kraften Simba!</b>.</q> <br><br>' + 
                                ' 1. Ni insåg att kraften fanns inom er hela tiden. Efter ett träningsmontage är ni redo<br>' +
                                ' 2. Du inser att du kan lära Potatis den hemliga ㄗ口匕丹匕工ち-stridstekniken <br>' +
                                ' 3. Ni går till SuperUltraMega-läget utan att passera Gå';
        button.onclick = bridge11;
    }else{
        image.style.backgroundImage = "url('./img/sorgligt.svg')";
        gameTexts.innerHTML = 'Då hör rösten igen en röst.<br>' + 
                                '<b>Röst:</b>-<q> <b>SIMBA!!!</b>.</q> <br><br>' + 
                                ' 1. Du är för sorgsen för att notera något<br>' + 
                                ' 2. Titta upp';
        button.onclick = bridge9;
                                                                                                                                     
    }
}

function bridge11() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');
    image.style.backgroundImage = "url('./img/kartoffelsion.gif')";

    setTimeout(changeImage, 5000);

    function changeImage(){
        image.style.backgroundImage = "url('./img/kartoffelsion-0.svg')";
    }

    gameTexts.innerHTML = 'Snart har din Potatis samlat över 9000 PotatisPoäng®. <br>' + 
                            'Tillräckligt med för att kartoffolveras till <b>Supotatis</b>  <br><br>' +
                            'Dags att tugga bubbelgum och sparka häck. Och du har slut på bubbelgum. <b>Supotatis</b>  <br><br>' + 
                            ' 1. Fortsätt.';
    button.onclick = supotatis1;
}