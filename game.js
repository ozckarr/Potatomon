/** (mjukstart med JSDOC)
 * @param {string} gameTexts - Berättelsetexten i spelet
 * @param {string} playerInput - Spelarens gäring i spelet
 */


function submittedPlayerInput(){
    let playerInput = document.getElementById('playerInput').value;
    const gameTexts = document.getElementById('gameTexts');

    gameTexts.innerHTML = playerInput;
    if(playerInput == '1'){
        gameTexts.innerHTML = 'Kul grej. Då tar jag den fasta. Ska vi puckla på varandra? <br> 1.Ja <br> 2.Nej';
    }else if(playerInput == '2'){
        gameTexts.innerHTML = 'Kul grej. Då tar jag den mjöliga. Ska vi puckla på varandra? <br> 1.Ja <br> 2.Nej';
    }else{
        gameTexts.innerHTML = 'Va, jag fattar inte. Vilken potatis vill du ha?<br> 1. Mjölig <br> 2. Fast';
    }
}
