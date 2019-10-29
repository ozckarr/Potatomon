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
    const playerInput = input.value
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
        gameTexts.innerHTML = '<b>Professorn:</b>-<q> Va? Jag fattar inte. Vilken potatis ville du ha? </q><br> 1. Mjölig <br> 2. Fast';
        button.onclick = event1;
    }
}

/**
 * Event2 (Rename) - Did you want a potato battle?
 */
function event2() {
    const playerInput = input.value
    const gameTexts = document.getElementById('gameTexts');

    if(playerInput == '1'){
        gameTexts.innerHTML = 'Oj va originellt. Allt visade sig vara en dröm...';

    }else if(playerInput == '2'){
        gameTexts.innerHTML = '<b>Professorn:</b> -<q> Se där. Jag tror att den gillar dig. <br>Då tar jag den mjöliga.<br>Får jag utmana dig i en potatisfight? </q> <br> 1.Ja <br> 2.Nej';

    }else{
        image.style.backgroundImage = "url('./img/fattarinte.svg')";
        gameTexts.innerHTML = '<b>Professorn:</b>-<q> Va? Jag fattar inte. Ville du ha en fight? </q><br> 1. Mjölig <br> 2. Fast';
        button.onclick = event2;
    }
}