/** 
 * Your potato is kartoffelvolved into a Supotatis
*/


function supotatis1() {
    const playerInput = input.value;
    const gameTexts = document.getElementById('gameTexts');

    image.style.backgroundImage = "url('./img/x.svg')";
    gameTexts.innerHTML = 'Korv';
    button.onclick = supotatis1;
}