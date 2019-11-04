/** 
 * The players potato is kartoffelvolved into a Supotatis
*/




    function fightBruseL() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1' || '2'){
        image.style.backgroundImage = "url('./img/megafight.gif')";     
        gameTexts.innerHTML = 'En episk strid börjar. Men Potatis gör sig redo för sin ultimata attack.<br>' +
                                'Titta en stund, jag lade några minuter på den där<br><br>' + 
                                ' 1. Fortsätt';
        button.onclick = giveDeathBlow;

    }else if(playerInput == '3'){ 
        image.style.backgroundImage = "url('./img/peace.svg')";
        gameTexts.innerHTML = 'Stora bocken Bruse inser att han tog i lite för mycket.<br>' + 
                                '<b>Stora Potatisen Bruse:</b>-<q> DU VÄN. STORA BRUSE GLAD. </q> <br><br>' +
                                ' 1. Fortsätt';
        button.onclick = peaceWithBruseL;

    }else{
        image.style.backgroundImage = "url('./img/megafight.gif-what.svg')";
        gameTexts.innerHTML = 'En episk strid börjar. Men Potatis gör sig redo för sin ultimata attack.<br>' +
                                'Titta en stund,jag lade några minuter på den där<br><br>' + 
                                ' 1. Fortsätt';
        button.onclick = giveDeathBlow;
                                                                                                                                     
    }
}

/** 
 *  The player gets a nice ending
*/

function peaceWithBruseL() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    image.style.backgroundImage = "url('./img/highscore4.svg')";
    gameTexts.innerHTML = 'Och där slog ni er ner och startade ett litet konditori. Proffessorn i kassan, Potatis gjorde tårtorna. Bruse fixade praliner och konfektyr. Och du blev kakbakaren. Äventyren lades på hyllan men ni saknade dem aldrig. <br><br>' + 
                            '<b>THE END</b>';
    button.value = 'Börja Om';
    button.onclick = restartGame;


}

/** 
 *  The player defeats the large potato
*/

function giveDeathBlow() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    image.style.backgroundImage = "url('./img/pew.gif')";
    gameTexts.innerHTML = 'Potatis gör sin ㄗ口匕丹匕工ち - attack. Han verkar få överhanden<br><br>' + 
                           ' 1. Fortsätt<br>';
    button.onclick = deafeatBruseL;                  
}

function deafeatBruseL() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    image.style.backgroundImage = "url('./img/storapotatisenbruse-defeat.svg')";
    gameTexts.innerHTML = 'Stora Bocken Bruse är besegrad.<br>' + 
                            '<b>Proffessorn:</b>-<q> En stor ondska i detta rike är nu besegrad. Jag måste nu erkänna vem jag egentligen är.</q><br>' + 
                            ' Jag är kung Edward, regent här i källaren. </q> <br><br>' + 
                            ' 1. Ok <br>' + 
                            ' 2. Wow, en kändis <br>' + 
                            ' 3. Jaha?!';
    button.onclick = youWin;                  
}

/** 
 *  The player wins the game - highscore
*/

function youWin() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    image.style.backgroundImage = "url('./img/highscore5.svg')";
    gameTexts.innerHTML = '<b>Kung Edward:</b>-<q> Jag vill därför belöna dig med halva källaren och ett presentkort i presentbutiken.</q> <br><br>' +
                            'Så kom det sig att du innehavade en halv källare och slutligen en Potatomon®-kaffekopp <br><br>' + 
                            'Snipp Snapp Slut, så var sagan slut';
    
    button.value = 'Börja Om';
    button.onclick = restartGame;                
}