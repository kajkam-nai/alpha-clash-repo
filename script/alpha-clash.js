function continueGame(){
    const alphabet = randomAlphabet();
    // console.log(alphabet);
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    backgroundColorSet(alphabet);
   
}

function keyHandlerButton(event){
    const pressKeyAlphabet = event.key;
    const currentAlphabet = document.getElementById('current-alphabet');
    const suggestAlphabet = currentAlphabet.innerText;
    const expectedAlphabet = suggestAlphabet.toLowerCase();
    console.log(expectedAlphabet,pressKeyAlphabet);
    if(pressKeyAlphabet === expectedAlphabet){
        backgroundColorRemove(expectedAlphabet);
        continueGame();
    }
    else
    console.log('you lost your life');


}
document.addEventListener('keyup',keyHandlerButton);

function play(){
    
    homeScreen = getElementId('home-screen');
    playGround = getShowId('play-ground');
    continueGame();
    
    

}