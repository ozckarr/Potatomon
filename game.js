/** (mjukstart med JSDOC)
 * @param {string} eventImage - Story images in the game
 * @param {string} gameTexts - Story texts in the game
 * @param {string} playerInput - Player action in the game
 * @param {string} playerButton - Players pressing the button
 */
const image = document.getElementById('eventImage');
const text = document.getElementById('gameTexts');
const input = document.getElementById('playerInput');
const button = document.getElementById("playerButton");



/**
 * This is the first action that will happen in my game
 */
function submittedPlayerInput() {
    image.style.backgroundImage = "url('./img/dittnamn.svg')";
    text.innerHTML = '<b>Professorn:</b>-<q> Pfff, vem bryr sig. Men det är farligt att gå runt ensamt. Ta med en potatis.</q> <br><br>' + 
                        '<i>Skriv i siffran för att välja ett svar.</i> <br><br>' + 
                        ' 1. Ta den mjöliga potatisen. Berättelsen slutar. Du vaknar upp i din säng och tror det du vill tro. <br>' +
                        ' 2. Ta den fasta potatisen. Du stannar här, och jag visar dig hur djupt potatiskällaren går.</q>';
    button.onclick = event1;
}

/**
 * Event1 (Rename) - You choose which potato you want
 */
function event1() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'){
        image.style.backgroundImage = "url('./img/highscore1.svg')";
        gameTexts.innerHTML = 'Oj va originellt. Allt visade sig vara en dröm...';
        button.value = 'Börja Om';
        button.onclick = restartGame;
    }else if(playerInput == '2'){
        image.style.backgroundImage = "url('./img/valtpotatis.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Se där. Jag tror att den gillar dig. <br>' + 
                                'Då tar jag den mjöliga.<br>Får jag utmana dig i en potatisfight? </q> <br>' + 
                                ' 1.Ja <br>' + 
                                ' 2.Nej';
        button.onclick = event2;
    }else{
        image.style.backgroundImage = "url('./img/fattarinte.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b>-<q> Va? Jag fattar inte. Vilken potatis ville du ha? </q><br><br>' + 
                                ' 1. Mjölig <br>' +
                                ' 2. Fast';
        button.onclick = event1;
    }
}

/**
 * Event2 (Rename) - Did you want a potato battle?
 */
function event2() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'){
        image.style.backgroundImage = "url('./img/fiiiiiggghhhhttt.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Ok. Då kör vi. Mjölig Potatis! Jag väljer dig </q> <br><br> ' + 
                                ' 1. Fast Potatis. Jag väljer dig! <br>' +
                                ' 2. Stampa på professorns potatis!';
        button.onclick = event3;   
    }else if(playerInput == '2'){ 
        image.style.backgroundImage = "url('./img/letsgo.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Ok. Men då kikar vi runt lite här i potatiskällaren. </q> <br><br>' + 
                                ' 1. Ok';
        button.onclick = event7;
    }else{
        image.style.backgroundImage = "url('./img/fattarinte.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b>-<q> Va? Jag fattar inte. Ville du ha en fight? </q><br><br>'+
                                ' 1. Ja <br>' +
                                ' 2. Nej';
        button.onclick = event2;
    }
}

/**
 * Event 3 Potato fight with the proffesor
 */

function event3() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'){
        image.style.backgroundImage = "url('./img/proff-attack1.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Ok. Mjölig Potatis! Gör Mos Ro Dah. </q> <br><br>' + 
                                ' 1. Fast Potatis. Gör Fry-douken! <br>' + 
                                ' 2. Fast Potatis. Gör Pytt Fu! <br>' + 
                                ' 3. Fast Potatis. Gör Jansson Punch!';
        button.onclick = event4;
    }else if(playerInput == '2'){
        image.style.backgroundImage = "url('./img/oortodoxt-attack1.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Hm. Oortodoxt. Men det viktigaste är ju att vinna. Då fortsätter vi ber i potatiskällaren </q> <br><br>' + 
                                ' 1. Ok';
        button.onclick = event7;
    }else{
        image.style.backgroundImage = "url('./img/oortodoxt-attack1.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Hm. Oortodoxt. Men det viktigaste är ju att vinna. Då fortsätter vi ber i potatiskällaren </q> <br><br>' + 
                                ' 1. Ok';
        button.onclick = event7;
    }
}

/**
 * Event 4 Potato fight with the proffesor part 2
 */

function event4() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'||'2'||'3'){
        image.style.backgroundImage = "url('./img/proff-attack2.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Imponerande. Mjölig Potatis! Gör Omnimash. </q> <br><br>' + 
                                ' 1. Fast Potatis. Gör Fry-douken! <br>' + 
                                ' 2. Fast Potatis. Gör Gratäng Slash! <br>' +
                                ' 3. Fast Potatis. Gör Paltsengan! <br>';
        button.onclick = event5;
    }else{
        image.style.backgroundImage = "url('./img/oortodoxt-attack1.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Hm. Oortodoxt. Men det viktigaste är ju att vinna. Då fortsätter vi ner i potatiskällaren </q> <br><br>' + 
                                ' 1. Ok';
        button.onclick = event7;
    }
}

/**
 * Event 5 Potato fight with the proffesor part 3
 */

function event5() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'||'2'||'3'){
        image.style.backgroundImage = "url('./img/proff-attack3.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Åh Nej. Mjölig Potatis! Gör Pommes Château de la Morte. </q> <br><br>' +
                                 ' 1. Fast Potatis. Gör Krokett Bomb! <br>' + 
                                 ' 2. Fast Potatis. Gör Rösti Slam! <br> ' + 
                                 ' 3. Fast Potatis. Gör Chips Beam!';
        button.onclick = event6;
    }else{
        image.style.backgroundImage = "url('./img/oortodoxt-attack1.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Hm. Oortodoxt. Men det viktigaste är ju att vinna. Då fortsätter vi ner i potatiskällaren </q> <br><br> ' + 
                                '1. Ok';
        button.onclick = event7;
    }
}

/**
 * End of battle  - the journey continues
 */

function event6() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'||'2'||'3'){
        image.style.backgroundImage = "url('./img/oortodoxt-attack1.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Typiskt. Det var dess enda svaghet.' + 
                                '<br> Hej, kom så går vi. </q> <br><br>' + 
                                ' 1. Följ med. <br>' + 
                                ' 2. Häng med. <br>' + 
                                ' 3. Anslut dig till professorns framfart.<br>';
        button.onclick = event7;
    }else{
        image.style.backgroundImage = "url('./img/oortodoxt-attack1.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Typiskt. Det var dess enda svaghet. <br> Nåväl, kom så går vi. </q> <br><br>' + 
                                ' 1. Följ med. <br> ' + 
                                ' 2. Häng med. <br> ' + 
                                ' 3. Anslut dig till professorns framfart.<br>';
        button.onclick = event7;
    }
}

/**
 * Event 7 - You get to a bridge
 */

function event7() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'||'2'||'3'){
        image.style.backgroundImage = "url('./img/hittatbro.svg')";
        gameTexts.innerHTML = 'Ni beger er ner i potatiskällaren. Ni skådar en bro i fjärran. <br><br>' + 
                                ' 1. Gå till bron <br> ' + 
                                ' 2. Försök att hitta en omväg';
        button.onclick = event8;
    }else{
        image.style.backgroundImage = "url('./img/hittatbro.svg')";
        gameTexts.innerHTML = 'Ni beger er ner i potatiskällaren. Ni skådar en bro i fjärran. <br><br>' + 
                                ' 1. Gå till bron <br>' +
                                ' 2. Försök att hitta en omväg';
        button.onclick = event8;                  
    }
}



/**
 * Event 8 - Bridge or detour - second chance
 */

function event8() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'){
        image.style.backgroundImage = "url('./img/tittapabro.svg')";
        gameTexts.innerHTML = 'Ni går på bron. Där skådar något i fjärran.<br><br>' + 
                                '1. Fortsätt <br> 2. Fly';
        button.onclick = event9;

    }else if(playerInput == '2'){ 
        image.style.backgroundImage = "url('./img/tittatnagot.svg')";
        gameTexts.innerHTML = 'Ni snokar runt lite och tycker er se något bakom en buske. <br><br>' + 
                                ' 1. Gå tillbaka till bron <br>' + 
                                ' 2. Undersök';
        button.onclick = event9;
    }else{
        image.style.backgroundImage = "url('./img/fattarinte.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b>-<q> Va. Hur tänkte du nu? </q> <br><br>' + 
                                ' 1. Gå till bron <br>' + 
                                ' 2. Försök att hitta en omväg.';
                                                                                                                                    
    }
}

/**
 * Event 9 - Split paths
 * path 1 continues in bridge.js
 * path 2 continues in datingsim.js
 */
function event9() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'){
        image.style.backgroundImage = "url('./img/lillapotatisenbruse.svg')";     /**Sagan ändras... */
        gameTexts.innerHTML = 'Där skådar ni en liten, liten potatis. Den börjar att tala. <br> ' + 
                                '<b>Lilla Potatisen Bruse:</b>-<q> Nej, nej ta inte mig. Ta Mellan Potatisen Bruse istället.</q> <br><br> ' + 
                                ' 1. Puckla på Lilla Potatisen Bruse<br>' + 
                                ' 2. Gå förbi Lilla Potatisen Bruse.';

    }else if(playerInput == '2'){ 
        image.style.backgroundImage = "url('./img/hittahiss.svg')";
        gameTexts.innerHTML = 'Nä men!? Där var ju en hiss <br><br>' + 
                                ' 1. Gå in i hissen <br>' + 
                                ' 2. Fortsätt att leta.';
        button.onclick = datingsim1;

    }else{
        image.style.backgroundImage = "url('./img/fattarinte.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b>-<q> Va. Hur tänkte du nu? </q> <br><br> ' + 
                                ' 1. Fortsätt över bron <br>' + 
                                ' 2. Undersök omvägar i trakten.';
        button.onclick = event9;
                                                                                                                                     
    }
}





/**
 * Restarts the game
 */

function restartGame() {
    location.reload();
}