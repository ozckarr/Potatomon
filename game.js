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
    text.innerHTML = '<b>Professorn:</b>-<q> Pfff, vem bryr sig. Men det är farligt att gå runt ensamt. Ta med en potatis.</q> <br><br> 1. Ta den mjöliga potatisen. Berättelsen slutar. Du vaknar upp i din säng och tror det du vill tro. <br> 2. Ta den fasta potatisen. Du stannar här, och jag visar dig hur djupt potatiskällaren går.</q>';
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


    }else if(playerInput == '2'){
        image.style.backgroundImage = "url('./img/valtpotatis.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Se där. Jag tror att den gillar dig. <br>Då tar jag den mjöliga.<br>Får jag utmana dig i en potatisfight? </q> <br> 1.Ja <br> 2.Nej';
        button.onclick = event2;

    }else{
        image.style.backgroundImage = "url('./img/fattarinte.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b>-<q> Va? Jag fattar inte. Vilken potatis ville du ha? </q><br><br> 1. Mjölig <br> 2. Fast';
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
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Ok. Då kör vi. Mjölig Potatis! Jag väljer dig </q> <br><br> 1. Fast Potatis. Jag väljer dig! <br> 2. Stampa på professorns potatis!';
        button.onclick = event3;   

    }else if(playerInput == '2'){ 
        image.style.backgroundImage = "url('./img/letsgo.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Ok. Men då kikar vi runt lite här i potatiskällaren. </q> <br><br> 1. Ok';
        button.onclick = event7;
    }else{
        image.style.backgroundImage = "url('./img/fattarinte.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b>-<q> Va? Jag fattar inte. Ville du ha en fight? </q><br><br> 1. Ja <br> 2. Nej';
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
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Ok. Mjölig Potatis! Gör Mos Ro Dah. </q> <br><br> 1. Fast Potatis. Gör Fry-douken! <br> 2. Fast Potatis. Gör Pytt Fu! <br> 3. Fast Potatis. Gör Jansson Punch! <br>';
        button.onclick = event4;

    }else if(playerInput == '2'){
        image.style.backgroundImage = "url('./img/oortodoxt-attack1.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Hm. Oortodoxt. Men det viktigaste är ju att vinna. Då fortsätter vi ber i potatiskällaren </q> <br><br> 1. Ok';
        button.onclick = event7;
    }else{
        image.style.backgroundImage = "url('./img/oortodoxt-attack1.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Hm. Oortodoxt. Men det viktigaste är ju att vinna. Då fortsätter vi ber i potatiskällaren </q> <br><br> 1. Ok';
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
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Imponerande. Mjölig Potatis! Gör Omnimash. </q> <br><br> 1. Fast Potatis. Gör Fry-douken! <br> 2. Fast Potatis. Gör Gratäng Slash! <br> 3. Fast Potatis. Gör Paltsengan! <br>';
        button.onclick = event5;
    }else{
        image.style.backgroundImage = "url('./img/oortodoxt-attack1.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Hm. Oortodoxt. Men det viktigaste är ju att vinna. Då fortsätter vi ner i potatiskällaren </q> <br><br> 1. Ok';
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
        image.style.backgroundImage = "url('./img/proff-attack.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Åh Nej. Mjölig Potatis! Gör Pommes Château de la Morte. </q> <br><br> 1. Fast Potatis. Gör Krokett Bomb! <br> 2. Fast Potatis. Gör Rösti Slam! <br> 3. Fast Potatis. Gör Chips Beam! <br>';
        button.onclick = event6;
    }else{
        image.style.backgroundImage = "url('./img/oortodoxt-attack1.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Hm. Oortodoxt. Men det viktigaste är ju att vinna. Då fortsätter vi ner i potatiskällaren </q> <br><br> 1. Ok';
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
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Typiskt. Det var dess enda svaghet. <br> Nåväl, kom så går vi. </q> <br><br> 1. Följ med. <br> 2. Häng med. <br> 3. Anslut dig till professorns framfart.<br>';
        button.onclick = event7;
    }else{
        image.style.backgroundImage = "url('./img/oortodoxt-attack1.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Typiskt. Det var dess enda svaghet. <br> Nåväl, kom så går vi. </q> <br><br> 1. Följ med. <br> 2. Häng med. <br> 3. Anslut dig till professorns framfart.<br>';
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
        gameTexts.innerHTML = 'Ni beger er ner i potatiskällaren. Ni skådar en bro i fjärran. <br><br> 1. Gå till bron <br> 2. Försök att hitta en omväg';
        button.onclick = event8;
    }else{
        image.style.backgroundImage = "url('./img/hittatbro.svg')";
        gameTexts.innerHTML = 'Ni beger er ner i potatiskällaren. Ni skådar en bro i fjärran. <br><br> 1. Gå till bron <br> 2. Försök att hitta en omväg';
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
        gameTexts.innerHTML = 'Ni går på bron. Där skådar något i fjärran.<br><br> 1. Fortsätt <br> 2. Fly';
        button.onclick = event9;

    }else if(playerInput == '2'){ 
        image.style.backgroundImage = "url('./img/tittatnagot.svg')";
        gameTexts.innerHTML = 'Ni snokar runt lite och tycker er se något bakom en buske. <br><br> 1. Gå tillbaka till bron <br> 2. Undersök';
        button.onclick = event9;
    }else{
        image.style.backgroundImage = "url('./img/fattarinte.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b>-<q> Va. Hur tänkte du nu? </q> <br><br> 1. Gå till bron <br> 2. Försök att hitta en omväg.';
                                                                                                                                    
    }
}

/**
 * Event 9 - Split paths
 */
function event9() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'){
        image.style.backgroundImage = "url('./img/lillapotatisenbruse.svg')";     /**Sagan ändras... */
        gameTexts.innerHTML = 'Där skådar ni en liten, liten potatis. Den börjar att tala. <br> <b>Lilla Potatisen Bruse:</b>-<q> Nej, nej ta inte mig. Ta Mellan Potatisen Bruse istället.</q> <br><br> 1. Puckla på Lilla Potatisen Bruse<br> 2. Gå förbi Lilla Potatisen Bruse.';

    }else if(playerInput == '2'){ 
        image.style.backgroundImage = "url('./img/hittahiss.svg')";
        gameTexts.innerHTML = 'Nä men!? Där var ju en hiss <br><br> 1. Gå in i hissen <br> 2. Fortsätt att leta.';
        button.onclick = datingsim1;

    }else{
        image.style.backgroundImage = "url('./img/fattarinte.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b>-<q> Va. Hur tänkte du nu? </q> <br><br> 1. Fortsätt över bron <br> 2. Undersök omvägar i trakten.';
        button.onclick = event9;
                                                                                                                                     
    }
}

/**
 * Dating Sim 1
 */

function datingsim1() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'){
        image.style.backgroundImage = "url('./img/inihiss.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b>-<q> Uff, den se trång ut. Ta din potatis och åk utan mig. </q> <br><br> 1. Gå in i hissen <br> 2. Leta efter andra omvägar i trakten';
        button.onclick = datingsim2;

    }else if(playerInput == '2'){ 
        image.style.backgroundImage = "url('./img/inihiss.svg')";
        gameTexts.innerHTML = 'Nä men!? Där var ju en hiss. Det är trångt. Men du och din potatis får plats. <br><br> 1. Gå in i hissen <br> 2. Leta efter andra omvägar i trakten';
        button.onclick = datingsim2;
    }else{
        image.style.backgroundImage = "url('./img/fattarinte.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b>-<q> Va? Vad vill du göra. </q> <br><br> 1. Gå in i hissen <br> 2. Leta efter andra omvägar i trakten.';
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
        gameTexts.innerHTML = 'Hissen åker neråt.  <br><br> 1. Vänta';
        button.onclick = datingsim3;
    }else if(playerInput == '2'){ 
        image.style.backgroundImage = "url('./img/potatisfattarinte.svg)";
        gameTexts.innerHTML = 'Det ser tomt ut runtomkring. <br><br> 1. Ta hissen';
        button.onclick = datingsim3;
    }else{
        image.style.backgroundImage = "url('./img/potatisfattarinte.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b>-<q> Va? Vet inte riktigt vad du menar? </q> <br><br> 1. Okej, jag tar med mig potatisen på en hisstur <br> 2. Okej, potatisen och jag tar en hisstur.';
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
        gameTexts.innerHTML = 'Hissen åker neråt. Tiden går...  <br><br> 1. Vänta <br> 2. Fråga potatisen -<q> Sååå hänger du här ofta?</q><br>';
        button.onclick = datingsim4;
    }else{
        image.style.backgroundImage = "url('./img/hissner.svg)";
        gameTexts.innerHTML = 'Hissen åker neråt. Tiden går...  <br><br> 1. Vänta <br> 2. Fråga potatisen -<q> Sååå hänger du här ofta?</q><br>';
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
        gameTexts.innerHTML = '<b>Potatis:</b>-<q> Nåväl. Mitt namn är ポテト-san. Jag flyttade nyligen hit till källaren för att finna lyckan.</q>  <br><br> 1. Så du är en fast potatis... Då antar jag att du är sorten Princess. <br> 2. Du var då en het potatis. Men jag kommer nog ändå inte att undvika dig. <br> 3. Du hade passat både som en måling och som Pommes Frites. I olja.';
        button.onclick = datingsim5;
    }else if(playerInput == '2'){ 
        image.style.backgroundImage = "url('./img/hissner-dating1.svg')";
        gameTexts.innerHTML = 'Nä men!? Där var ju en hiss. Det är trångt. Men du och din potatis får plats. <br><br> 1. Gå in i hissen <br> 2. Leta efter andra omvägar i trakten';
        button.onclick = datingsim4;
    }else{
        image.style.backgroundImage = "url('./img/hissner.svg')";
        gameTexts.innerHTML = 'Inget händer. Hissen fortsätter åka. Tiden går... </q> <br><br> 1. Vänta <br>2. Fråga potatisen -<q> Sååå hänger du här ofta?</q><br>';
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
        gameTexts.innerHTML = '<b>Potatis:</b> -<q> Ah, va gulligt utav dig. <br> Senpai. </q> <br><br> 1. Varför kallas det strips? Jag tror att du kan visa mig. <br> 2. Jag har en potatisstöt. Vill du hem till mig och testa den?. <br> 3. Sugen på att göra en halv special? Du vet, korv med mos.';
        button.onclick = datingsim6;
    }else{
        image.style.backgroundImage = "url('./img/hissner-dating2.svg')";
        gameTexts.innerHTML = '<b>Potatis:</b> -<q> Ah, va gulligt utav dig. <br> Senpai. </q> <br><br> 1. Varför kallas det strips? Jag tror att du kan visa mig. <br> 2. Jag har en potatisstöt. Vill du hem till mig och testa den?. <br> 3. Sugen på att göra en halv special? Du vet, korv med mos.';
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
        gameTexts.innerHTML = '<b>Potatis:</b> -<q> Jag är inte den den typen utav potatis. <br> Din Knöl. </q> <br><br> 1. Jag är hemsk ledsen men jag vill ha ditt efternamn, är det Jansson? <br> 2. Förlåt att jag är framfusig men du råkar inte vara en Asterix? För i fotnoten står det marriage material. <br> 3. Jag är ledsen men jag har inte varit komplett tills jag mötte dig. Vill du vara klyftpotatisen som gör det helt.';
        button.onclick = datingsim7;
    }else{
        image.style.backgroundImage = "url('./img/hissner-dating3.svg')";
        gameTexts.innerHTML = '<b>Potatis:</b> -<q> Jag är inte den den typen utav potatis. <br> Din Knöl. </q> <br><br> 1. Jag är hemsk ledsen men jag vill ha ditt efternamn, är det Jansson? <br> 2. Förlåt att jag är framfusig men du råkar inte vara en Asterix? För i fotnoten står det marriage material. <br> 3. Jag är ledsen men jag har inte varit komplett tills jag mötte dig. Vill du vara klyftpotatisen som gör det helt.';
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
        gameTexts.innerHTML = '<b>Potatis:</b> -<q> Awwww.</q> <br> Och stod ni pratade långt efter att hissen stannat. <br> Ett tag efter det friade Potatis. Ni gifte er året efter... <br><br> 1. Fortsätt';
        button.onclick = datingsim8;
    }else{
        image.style.backgroundImage = "url('./img/hissner-dating5.svg')";
        gameTexts.innerHTML = '<b>Potatis:</b> -<q> Awwww.</q> <br> Och stod ni pratade långt efter att hissen stannat. <br> Ett tag efter det friade Potatis.<br> Ni gifte er året efter... <br><br> 1. Fortsätt';
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
        
    }else{
        image.style.backgroundImage = "url('./img/highscore2.svg')";
        gameTexts.innerHTML = '....Och ni levde lyckligt i alla era dagar.';
    }
}